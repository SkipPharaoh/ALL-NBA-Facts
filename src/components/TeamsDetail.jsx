            // IMPORTS //
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'


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
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{team.full_name} Information</Card.Header>
                    <Card.Img variant="top" src={require(`./NBA_Team_Logo/${team.name}.png`)} />
                    <Card.Body>
                        <Card.Title>{team.conference}ern Conference</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{team.division} Division</Card.Subtitle>
                        <Card.Text>Located in the city of {team.city} with the team's abbreviation as {team.abbreviation}</Card.Text>
                        <Link to={`/teams/`} >
                            {/* <h3>{team.full_name}</h3> */}
                            <Button variant="primary">NBA Teams</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            }
        </div>
    )
}

export default TeamsDetail
