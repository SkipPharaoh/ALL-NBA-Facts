            // IMPORTS //
import {useState, useEffect} from 'react'
import {Button, Card}  from 'react-bootstrap'
import './Players.css'



function Players(){
    // States //
    const [players, setPlayers] = useState([])
    const [page, setPage] = useState(1)

    // NEXT Page Function //
    const NextPage = async (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    // PREVIOUS Page Function //
    const PreviousPage = (e) => {
        e.preventDefault()
        if (page === 1) {
            setPage(1)
        }else if(page > 1) {
            setPage(page - 1)
        }
    }

    // ASYNC FETCH //
    const getPlayers = async () =>{
        try{
            let URL = `https://www.balldontlie.io/api/v1/players?page=${page}&per_page=50`
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
    },[page])
    
    
    const PlayerResults = players.map((player, idx)=>{
        return (
            <div key={idx}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{player.first_name} {player.last_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Position: {player.position}</Card.Subtitle>
                        <Card.Text>
                            Team: {player.team.full_name}
                        </Card.Text>
                    </Card.Body>
                </Card> 
            </div>
        )
    })

    

    return (
        <div>
            <h1>NBA Players</h1>
            <div className="Topbuttons">
                <Button className='PreButton' onClick={PreviousPage} >Previous Page</Button>
                <button className='PageCount'>Current Page: {page}</button>
                <button className='PageCount'>Total Pages: 76</button>
                <Button className='NextButton' onClick={NextPage} >Next Page</Button>
            </div>
            <div className='PlayersResults'>
                <main >
                    <section className='PlayerContainer'>
                        {PlayerResults}
                    </section>
                </main>
            </div>
            <div className="Bottombuttons">
                <Button className='PreButton' onClick={PreviousPage} >Previous Page</Button>
                <button className='PageCount'>Current Page: {page}</button>
                <button className='PageCount'>Total Pages: 76</button>
                <Button className='NextButton' onClick={NextPage} >Next Page</Button>
            </div>
        </div>
    )
}

export default Players