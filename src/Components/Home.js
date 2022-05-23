import React, { useCallback, useEffect, useState } from "react"
import { CircularProgress } from "@mui/material";
import usePageState from "../Hooks/usePageState";
import fetchData from "../Services/Api"
import Card from './Card'
import NavGroup from "./NavGroup";

const Home = () => {
    // TODO: move to hook and use reducer
    const { start, maxPerPage, loading, finishLoading, next, prev, } = usePageState();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const [pokemons, types] = await fetchData(start, maxPerPage);
            setData(pokemons);
            finishLoading();
        }

        getPokemons();
    }, [start, maxPerPage]);

    const renderCards = useCallback(() => {
        return data.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)
    }, [data]);

    if(loading) {
        return <CircularProgress />;
    }

    return (!loading && <React.Fragment><div className="group">
            {renderCards()}
        </div>
        <NavGroup disablePrev={start<=1} next={next} prev={prev} />
    </React.Fragment>);
}

export default Home;