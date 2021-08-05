class CustomMap extends Map {
    constructor(entries = []) {
        super(entries.reduce((ent, [k, v]) => {
            if(Array.isArray(v)) ent.push([k, new CustomMap(v)])
            else ent.push([k, v])
            return ent;
        }, []))
    }

    * [Symbol.iterator]() {
        for (const [k, v] of this.entries()) {
            yield v instanceof CustomMap ? [k, [...v]] : [k, v]
        }
    }

    get(key) {
        return super.get(key)
    }

    set(key, value) {
        super.set(key, value)
        return value instanceof CustomMap ? value : this
    }
    
    saveTo(storage) {
        localStorage.setItem(storage, JSON.stringify(...this))
    }

    /* Wheew! This is some crazy refactoring stuff, you don't wanna hear it
        I want to set a key:value on a CustomMap instance, that value is the previous value for that key
        which is an instance of CustomMap, but if a previous value doesn't exist,
        it should set a new CustomMap(), then I want to get that CustomMap instance value
        that I set last(which may be previous or new), to set another key:value on it also,
        this goes on, provided that the value I want to set is an instance of a CustomMap,
        if not, then I want to set a lastKey:lastValue in which `lastValue instanceof CustomMap === false`,
        then finally save the newly generated CustomMap to localStorage.
        
        Goto, quizEngine.js and search for this method to see its use.
    */
    autoSetGetSetSave({keys, lastPair, storage}) {
        return keys.reduce((acc, key) => {
            return acc.set(key, acc.get(key) || new CustomMap())
        }, this).set(lastPair[0], lastPair[1]).saveTo(storage)
    }

    composeGet(...keys) {
        const result = keys.reduce((acc, key) => {
            return acc.get(key) || new CustomMap()
        }, this)
        return result instanceof CustomMap ? undefined : result
    }
}

const formatLangText = (langText) => {
    if (langText === 'javascript') return 'JavaScript';
    if (langText === 'cs') return 'C#';
    if (langText === 'cplusplus') return 'C++';
    if (langText.length === 1) return langText.toUpperCase();
    return langText[0].toUpperCase() + langText.slice(1);
}

export {
    formatLangText,
    CustomMap,
}