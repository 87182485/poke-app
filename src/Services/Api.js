const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

const NOTFOUND = 'Not Found';

const fetchData = async (id) => {
    // TODO: add try catch
    try {
        const fetchResult = await fetch(`${BASEURL}${id}`);

        const result = await fetchResult.json();

        return result;
    } catch {
        return NOTFOUND
    }
};

const fetchType = async (url) => {
    const response = await fetch(url);

    const data = await response.json();

    return data;
}

const fetchTypes = async (typeUrls) => {
    const data = await Promise.all(typeUrls.map(url => fetchType(url)));

    return data;
}

const fetchGroupData = async (start, limit) => {
    const promises = Array(limit).fill(0).map((fetcher, index) => {
        return fetchData(start+index);
    }, [])
    const rawData = await Promise.all(promises);

    const filterdData = rawData.filter(d => d!==NOTFOUND);

    // const types = await fetchTypes(getTypeList(filterdData));

    return [filterdData, []];
}

// TODO: Helpers
function getTypeList(pokemonData) {
    const typeMap = pokemonData.reduce((map, { types }) => {
        types.forEach(({ type }) => {
            if(!map.has(type.name)) {
                map.set(type, type.url);
            }
        })
        return map;
    }, new Map());

    return [...typeMap.values()];
}

export default fetchGroupData;