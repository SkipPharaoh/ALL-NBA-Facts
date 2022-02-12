            // IMPORTS //
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



function Players(){
    // States //
    const [players, setPlayers] = useState([])

    // ASYNC FETCH //
    const getPlayers = async () =>{
        try{
            const URL = "https://www.balldontlie.io/api/v1/players?per_page=100"
            const resp = await fetch(URL)
            const foundPlayers = await resp.json()
            setPlayers(foundPlayers.data)
        }catch(err){
            console.log(err)
        }
    }
    
    // USE EFFECT //
    useEffect(()=>{
        getPlayers()
    },[])
    console.log(players)
    
    
    const ArrResults = players.map((player, idx)=>{
        return (
                <div key={idx}>
                    <h3>{player.first_name} {player.last_name}</h3>
                </div>
        )
    })

    return (
        <div>
            <h1>Players Component Rendering</h1>
            {/* <PlayersDetail players={players} setPlayers={setPlayers} /> */}
            {ArrResults}
        </div>
    )
}

export default Players