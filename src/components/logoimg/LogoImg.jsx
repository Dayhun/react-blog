import React from 'react'
import Logoimg from '../../assets/Logo.svg'

export default function LogoImg() {
    return (
        <h1>
            <a href="./">
                <img src={Logoimg} alt="My Blog" />
            </a>
        </h1>
    )
}
