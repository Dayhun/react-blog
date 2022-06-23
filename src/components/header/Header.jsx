import './header.css'
import LogoImg from '../logoimg/LogoImg';
import ProfileImg from '../profileimg/ProfileImg';
import WriteButton from '../button/WriteButton';
import LogoutButton from '../button/LogoutButton';
import Login from '../login/Login';
import Register from '../register/Register';
export default function Header() {
    return (
        <header>
            <div class="max-width">
                <LogoImg />
                <ul>
                    {/* 로그인된 상태 */}
                    <ProfileImg />
                    <WriteButton />
                    <LogoutButton />

                    {/* 로그아웃된 상태 */}
                    <Login />
					<Register />
                </ul>
            </div>
        </header>
    )
}