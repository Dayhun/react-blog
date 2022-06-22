import './header.css'
import LogoImg from '../logoimg/LogoImg';
import ProfileImg from '../profileimg/ProfileImg';
import WriteButton from '../button/WriteButton';
import LogoutButton from '../button/LogoutButton';
export default function Header() {
    return (
        <header>
            <div class="max-width">
                <LogoImg />
                <ul>
                    <ProfileImg />
                    <WriteButton />
                    <LogoutButton />
                </ul>
            </div>
        </header>
    )
}