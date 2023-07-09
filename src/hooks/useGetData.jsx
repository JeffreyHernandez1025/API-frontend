import getData from "../API/getData";
import { useState, useEffect } from "react";

export default function useGetData(){
    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getData()
                setAllPokemon(data.data.data)
            } catch(e){
                console.log(`eror in getting pokemon ${e}`)
            }
        }

        fetchData()
    }, [])

    return{
        allPokemon
    }
}