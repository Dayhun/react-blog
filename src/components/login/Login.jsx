import React from 'react'
import LoginIcon from '../../assets/icon-login.svg'

export default function Login() {
  return (
    <li>
      <a href="#" class="button gray">
        <img src={LoginIcon} alt="" />
        <span>Login</span>
      </a>
    </li>
  )
}
