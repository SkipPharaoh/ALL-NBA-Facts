            // IMPORTS //
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


function TeamsDetail(){
    // Params/State //
    const {id} = useParams()
    const [team, setTeam] = useState()


    // ASYNC FETCH //
    const getTeam = async () => {
        try {
            const URL = `https://www.balldontlie.io/api/v1/teams/${id}`
            const res = await fetch(URL)
            const foundTeam = await res.json()
            console.log(foundTeam)
            setTeam(foundTeam)
        }catch(err){
            console.log(err)
        }
    }

    // USE EFFECT //
    useEffect(()=>{
        getTeam()
    },[])

    return(
        <div>
            {!team ? 
            <h1>
             Team Loading...
            </h1>
            : <div>
                <h3>{team.full_name}</h3>
                <h4>{team.conference}ern Conference</h4>
                <h5>{team.division} Division</h5>
            </div>
            }
        </div>
    )
}

export default TeamsDetail
