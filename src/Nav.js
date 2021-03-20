import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link className = 'link' to = '/'>
                    <li>
                        Home
                    </li>
                </Link>
                <Link className = 'link' to = '/about'>
                    <li>
                        About
                    </li>
                </Link>
            </ul>   
        </nav>
    )
}

export default Nav;