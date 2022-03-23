            // IMPORTS //
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
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

    const TeamResults = !teams ? (<h1>Loading team...</h1>) : teams.map((team, idx)=>{
        return (
            <div key={idx}>
                <section>
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>{team.full_name}</Card.Header>
                        <Card.Img variant="top" src={require(`./NBA_Team_Logo/${team.name}.png`)} />
                        <Card.Body>
                            <Link to={`/teams/${team.id}`} >
                                <Button variant="primary">See More Info</Button>
                            </Link>
                        </Card.Body>
                    </Card>
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