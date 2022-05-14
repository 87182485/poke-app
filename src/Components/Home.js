import { useCallback, useEffect, useState } from "react"
import fetchData from "../Services/Api"
import Card from './Card'

const Home = ({ id }) => {
    // TODO: move to hook and use reducer
    const [start, setStart] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemons = async () => {
            const [pokemons, types] = await fetchData(start, maxPerPage);
            setData(pokemons);
            setLoading(false)
        }

        getPokemons();
    }, [id, start, maxPerPage]);

    const renderCards = useCallback(() => {
        return data.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)
    }, [data]);

    return (!loading && <div className="group">
        {renderCards()}
    </div>);
}

export default Home;