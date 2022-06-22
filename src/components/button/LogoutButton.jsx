import './button.css'
import IconLogout from '../../assets/icon-logout.svg'

export default function LogoutButton() {
    return (
        <li>
            <button className="button white">
                <img src={IconLogout} alt="" />
                <span>Logout</span>
            </button>
        </li>
    )
}
