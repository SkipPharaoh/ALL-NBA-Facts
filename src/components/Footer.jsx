            // IMPORTS //
import './Footer.css'
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'

function Footer(){
    return(
        <Navbar
            className='Footer'
            fixed='bottom'
            expand="xxxl"
            bg='light'
            variant="light"
            >
            <Navbar.Brand>
                <Link to='/'>
                <img className='Logo' src="https://cutewallpaper.org/21/nba-logo-picture/Who-should-replace-Jerry-West-on-a-new-NBA-logo-The-.png" />
                </Link>
            </Navbar.Brand>
            <h6>COPYRIGHT © Caniggia Thompson | Designed By Caniggia</h6>
            <div>
                <a target="_blank" href="https://github.com/SkipPharaoh"><img src="https://img.icons8.com/clouds/50/000000/github.png"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/skippharaoh/"><img src="https://img.icons8.com/clouds/50/000000/linkedin.png"/></a>
            </div>
        </Navbar>
    )
}

export default Footer