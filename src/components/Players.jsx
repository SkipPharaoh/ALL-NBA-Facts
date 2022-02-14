            // IMPORTS //
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button}  from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
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
            // setPage(searchPage)
            console.log(page)
        }
        // return page
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
        // setPage(page + 1)
        console.log(page)
    },[page])
    // console.log(players)
    
    
    const PlayerResults = players.map((player, idx)=>{
        return (
            <div key={idx}>
                <h3>{player.first_name} {player.last_name}</h3>
            </div>
        )
    })

    

    return (
        <div>
            <h1>NBA Players</h1>
            <Button className='PreButton' onClick={PreviousPage} >Previous Page</Button>
            <button className='PageCount'>Current Page: {page}</button>
            <button className='PageCount'>Total Pages: 76</button>
            <Button className='NextButton' onClick={NextPage} >Next Page</Button>
            <div className='PlayersResults'>
                <main >
                    <section className='PlayerContainer'>
                        {PlayerResults}
                    </section>
                </main>
            </div>
            <Button className='PreButton' onClick={PreviousPage} >Previous Page</Button>
            <button className='PageCount'>Current Page: {page}</button>
            <button className='PageCount'>Total Pages: 76</button>
            <Button className='NextButton' onClick={NextPage} >Next Page</Button>
        </div>
    )
}

export default Players