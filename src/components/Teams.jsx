            // IMPORTS //
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Teams.css'

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

    const TeamResults = teams.map((team, idx)=>{
        return (
            <div key={idx}>
                <section>
                    <Link to={`/teams/${team.id}`} >
                        <h3>{team.full_name}</h3>
                    </Link>
                </section>
            </div>
        )
    })

    return(
        <div>
            <h1>All NBA Teams</h1>
            <section  className='TeamsContainer'>
                {TeamResults}
            </section>
        </div>
    )
}

export default Teams