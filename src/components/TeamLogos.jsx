            // IMPORTS //
import { Button, Card } from 'react-bootstrap'
import AltTeamLogo from '../Data'
import {useState, useEffect} from 'react'


function TeamLogos(props){
    // Props //
    const {team} = props

    // VARIABLES //
    const [showLogos, setShowLogos] = useState(false)
    const [nameLogo, setNameLogo] = useState([])
    
    
    // let nameLogo = []
    const showAltLogo = () => {
        console.log(team.name)
        let arrLogo = []
        for (let i=0; i < AltTeamLogo[team.id].length; i++){
            arrLogo.push(AltTeamLogo[team.id][i])
            console.log(AltTeamLogo[team.id][i]);
        }
        setNameLogo(arrLogo)
    }
    useEffect(()=>{
        showAltLogo()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    // FUNCTION TO SHOW OR HIDE PROPER ALT TEAM LOGOS //
    const toggleShow = () => {
        setShowLogos(!showLogos)
        console.log(showLogos)
    }

    // RENDERING PAST LOGOS ON PAGE //
    const AltLogo = showLogos && nameLogo.map((logo, idx)=>{
        console.log(logo)
        return(
            <div key={idx}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require(`./Alt_Logos/${team.name}/${logo}`)} />
                </Card>
            </div>
        )
    })

    return (
        <div className='Toggle'>
            <Button className='Togglebtn' onClick={toggleShow}>Hide/Show Previous Team Logos</Button>
            <h4>Previous Logos</h4>
            <div className='AltLogos'>
                {AltLogo}
            </div>
        </div>
    )
}

export default TeamLogos