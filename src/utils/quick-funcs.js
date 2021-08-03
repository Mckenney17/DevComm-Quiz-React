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

    set(key, value) {
        super.set(key, value)
        return value instanceof CustomMap ? value : undefined
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