            // IMPORTS //
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './TeamsDetail.css'


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
            // console.log(foundTeam)
            setTeam(foundTeam)
        }catch(err){
            console.log(err)
        }
    }

    // USE EFFECT //
    useEffect(()=>{
        getTeam()
    },[])

    function importAll(r) {
        let AltLogos = {};
        r.keys().map((item, index) => { AltLogos[item.replace('./', '')] = r(item); });
        return AltLogos;
    }

    // 76ERS ALT LOGOS //
    const SixersLogos = importAll(require.context('./Alt_Logos/76ers', false, /\.(png)$/));
    console.log(SixersLogos)

    // BUCKS ALT LOGOS //
    const BucksLogos = importAll(require.context('./Alt_Logos/Bucks', false, /\.(png)$/));
    console.log(BucksLogos)

    // BULLS ALT LOGOS //
    const BullsLogos = importAll(require.context('./Alt_Logos/Bulls', false, /\.(png)$/));
    console.log(BullsLogos)

    // CAVELIERS ALT LOGOS //
    const CavsLogos = importAll(require.context('./Alt_Logos/Caveliers', false, /\.(png)$/));
    console.log(CavsLogos)

    // CELTICS ALT LOGOS //
    const CelticsLogos = importAll(require.context('./Alt_Logos/Celtics', false, /\.(png)$/));
    console.log(CelticsLogos)

    // CLIPPERS ALT LOGOS //
    const ClippersLogos = importAll(require.context('./Alt_Logos/Clippers', false, /\.(png)$/));
    console.log(ClippersLogos)

    // GRIZZLIES ALT LOGOS //
    const GrizzliesLogos = importAll(require.context('./Alt_Logos/Grizzlies', false, /\.(png)$/));
    console.log(GrizzliesLogos)

    // HawkS ALT LOGOS //
    const HawksLogos = importAll(require.context('./Alt_Logos/Hawks', false, /\.(png)$/));
    console.log(HawksLogos)

    // Heat ALT LOGOS //
    const HeatLogos = importAll(require.context('./Alt_Logos/Heat', false, /\.(png)$/));
    console.log(HeatLogos)

    // Hornets ALT LOGOS //
    const HornetsLogos = importAll(require.context('./Alt_Logos/Hornets', false, /\.(png)$/));
    console.log(HornetsLogos)

    // Jazz ALT LOGOS //
    const JazzLogos = importAll(require.context('./Alt_Logos/Jazz', false, /\.(png)$/));
    console.log(JazzLogos)

    // Kings ALT LOGOS //
    const KingsLogos = importAll(require.context('./Alt_Logos/Kings', false, /\.(png)$/));
    console.log(KingsLogos)

    // Knicks ALT LOGOS //
    const KnicksLogos = importAll(require.context('./Alt_Logos/Knicks', false, /\.(png)$/));
    console.log(KnicksLogos)

    // Lakers ALT LOGOS //
    const LakersLogos = importAll(require.context('./Alt_Logos/Lakers', false, /\.(png)$/));
    console.log(LakersLogos)

    // Magic ALT LOGOS //
    const MagicLogos = importAll(require.context('./Alt_Logos/Magic', false, /\.(png)$/));
    console.log(MagicLogos)

    // Mavericks ALT LOGOS //
    const MavericksLogos = importAll(require.context('./Alt_Logos/Mavericks', false, /\.(png)$/));
    console.log(MavericksLogos)

    // Nets ALT LOGOS //
    const NetsLogos = importAll(require.context('./Alt_Logos/Nets', false, /\.(png)$/));
    console.log(NetsLogos)

    // Nuggets ALT LOGOS //
    const NuggetsLogos = importAll(require.context('./Alt_Logos/Nuggets', false, /\.(png)$/));
    console.log(NuggetsLogos)

    // Pacers ALT LOGOS //
    const PacersLogos = importAll(require.context('./Alt_Logos/Pacers', false, /\.(png)$/));
    console.log(PacersLogos)

    // Pelicans ALT LOGOS //
    const PelicansLogos = importAll(require.context('./Alt_Logos/Pelicans', false, /\.(png)$/));
    console.log(PelicansLogos)

    // Pistons ALT LOGOS //
    const PistonsLogos = importAll(require.context('./Alt_Logos/Pistons', false, /\.(png)$/));
    console.log(PistonsLogos)

    // Raptors ALT LOGOS //
    const RaptorsLogos = importAll(require.context('./Alt_Logos/Raptors', false, /\.(png)$/));
    console.log(RaptorsLogos)

    // Rockets ALT LOGOS //
    const RocketsLogos = importAll(require.context('./Alt_Logos/Rockets', false, /\.(png)$/));
    console.log(RocketsLogos)

    // Spurs ALT LOGOS //
    const SpursLogos = importAll(require.context('./Alt_Logos/Spurs', false, /\.(png)$/));
    console.log(SpursLogos)

    // Suns ALT LOGOS //
    const SunsLogos = importAll(require.context('./Alt_Logos/Suns', false, /\.(png)$/));
    console.log(SunsLogos)

    // Thunder ALT LOGOS //
    const ThunderLogos = importAll(require.context('./Alt_Logos/Thunder', false, /\.(png)$/));
    console.log(ThunderLogos)

    // Timberwolves ALT LOGOS //
    const TimberwolvesLogos = importAll(require.context('./Alt_Logos/Timberwolves', false, /\.(png)$/));
    console.log(TimberwolvesLogos)

    // TrailBlazer ALT LOGOS //
    const TrailLogos = importAll(require.context('./Alt_Logos/Trail Blazers', false, /\.(png)$/));
    console.log(TrailLogos)

    // Warriors ALT LOGOS //
    const WarriorsLogos = importAll(require.context('./Alt_Logos/Warriors', false, /\.(png)$/));
    console.log(WarriorsLogos)

    // Wizards ALT LOGOS //
    const WizardsLogos = importAll(require.context('./Alt_Logos/Wizards', false, /\.(png)$/));
    console.log(WizardsLogos)
      
    // <img src={SixersLogos['doggy.png']} />

    return(
        <div>
            {!team ? 
            <h1>
             Team Loading...
            </h1>
            : <div className='TeamDetail'>
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
