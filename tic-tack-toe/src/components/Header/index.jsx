import StyleSheet from './header.module.css';
import { FaHashtag } from "react-icons/fa";
export function Header() {
    // const [title, setTitle] = useState('');
    return(
        <header className={StyleSheet.header}>
            <h1 className={StyleSheet.heading}>TIC TAC TOE <FaHashtag /></h1>

        </header>
    )
}