            // IMPORTS //
import {useState, useEffect} from 'react'

function Teams(){
    // States //
    const [teams, setTeams] = useState([])

    // ASYNC FETCH //
    const getTeams = async () => {
        try {
            const URL = "https://www.balldontlie.io/api/v1/teams"
            const res = await fetch(URL)
            const foundTeams = await res.json()
            console.log(foundTeams.data)
            setTeams(foundTeams.data)
        }catch(err){
            console.log(err)
        }
    }

    // USE EFFECT //
    useEffect(()=>{
        getTeams()
    },[])

    return(
        <div>
            <h1>Teams Component Rendering</h1>
        </div>
    )
}

export default Teams