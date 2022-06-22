import React from 'react'
import { Link } from 'react-router-dom'
import Logoimg from '../../assets/Logo.svg'

export default function LogoImg() {
    return (
        <h1>
            <Link to="/">
                <img src={Logoimg} alt="My Blog" />
            </Link>
        </h1>
    )
}
