import React from 'react'
import RegisterIcon from '../../assets/icon-register.svg'

export default function Register() {
  return (
    <li class="only-pc">
        <a href="#" class="button gray">
            <img src={RegisterIcon} alt="" />
            <span>Register</span>
        </a>
    </li>
  )
}
