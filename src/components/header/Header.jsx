import './header.css'
import LogoImg from '../../assets/Logo.svg'
import ProfileImg from '../profileimg/ProfileImg';
import WriteButton from '../button/WriteButton';
import LogoutButton from '../button/LogoutButton';
export default function Header() {
    return (
        <header>
            <div class="max-width">
                <h1>
                    <a href="./">
                        <img src={LogoImg} alt="My Blog" />
                    </a>
                </h1>
                <ul>
                    <ProfileImg />
                    <WriteButton />
                    <LogoutButton />
                </ul>
            </div>
        </header>
    )
}