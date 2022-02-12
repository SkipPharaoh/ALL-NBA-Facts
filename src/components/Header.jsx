import { Link } from 'react-router-dom'


function Header(){

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return(
        <nav>
            <Link to='/'>
            <h1>NBA🏀 Center</h1>
            </Link>
            <Link to='players'>Players</Link>
            <Link to='teams'>Teams</Link>
            <form action="" onSubmit={handleSubmit}>
                <input type="search" />
                <button>Search</button>
            </form>
        </nav>
    )
}

export default Header