import './button.css'
import IconModifyWhite from '../../assets/icon-modify-white.svg'

export default function WriteButton() {
    return (
        <li>
            <a href="#" class="button">
                <img src={IconModifyWhite} alt="" />
                <span>Write</span>
            </a>
        </li>
    )
}
