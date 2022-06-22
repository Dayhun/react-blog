import './button.css'
import { Link } from 'react-router-dom'

export default function BackButton() {
    return (
        <Link to="/" className='btn-back'>
            <span className='a11y-hidden'>back</span>
        </Link>
    )
}
