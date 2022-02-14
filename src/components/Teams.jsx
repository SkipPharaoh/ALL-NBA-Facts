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

    const TeamResults = teams.map((team, idx)=>{
        return (
            <div key={idx}>
                <section>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require(`./NBA_Team_Logo/${team.name}.png`)} />
                        <Card.Body>
                            <Card.Title>{team.full_name}</Card.Title>
                            <Link to={`/teams/${team.id}`} >
                                {/* <h3>{team.full_name}</h3> */}
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

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=`https://kinexon.com/uploads/images/Sports/_400x400_crop_center-center_82_line/${team.city}_${team.name}_Logo_Website.png` />
  <Card.Body>
    <Card.Title>{team.full_name}</Card.Title>
    <Button variant="primary">See More Info</Button>
  </Card.Body>
</Card> */}