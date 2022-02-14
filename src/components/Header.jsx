            // IMPORTS //
import './Header.css'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'


function Header(){

    return(
        <Navbar
            className='Header'
            justify-content='space-evenly'
            expand="xxxl"
            bg='light'
            variant='light'
            >
            <Navbar.Brand>
                <Link to='/'>
                <img className='Logo' src="https://cutewallpaper.org/21/nba-logo-picture/Who-should-replace-Jerry-West-on-a-new-NBA-logo-The-.png" />
                </Link>
            </Navbar.Brand>
            <Link to='/players'>Players</Link>
            <Link to='/teams'>Teams</Link>
            <Link to='/search'>
                <Button>Search</Button>
            </Link>
        </Navbar>
    )
}

export default Header