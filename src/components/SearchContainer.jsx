            // IMPORTS //
import {useState, useEffect} from 'react'
import Results from './Results'
import Search from './Search'


function SearchContainer(){
    // State/Params //
    const [search, setSearch] = useState("")
    const [results, setResults] = useState()

    // ASYNC FETCH //
    const getPlayer = async (play) => {
        try {
            const URL = `https://www.balldontlie.io/api/v1/players?search=${play}`
            const res = await fetch(URL)
            const foundPlayer = await res.json()
            console.log(foundPlayer)
            if (foundPlayer.data.length === 0){
                setResults(null)
            }else {
                setResults(foundPlayer.data)
            }
        }catch(err){
            console.log(err)
        }
    }

    // USE EFFECT //
    useEffect(()=>{
    },[search])


    return(
        <div>
            <h1>Need A Certain Player?</h1>
            <Search search={search} setSearch={setSearch} getPlayer={getPlayer}/>
            <Results search={search} results={results}/>
        </div>
    )
}

export default SearchContainer