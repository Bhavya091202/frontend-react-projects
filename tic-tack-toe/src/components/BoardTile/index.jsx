import styles from './boardtile.module.css';

export function BoardTile({value, onClick}) {
    // const [title, setTitle] = useState('');
    const choice = value === 'X'? 'x' : 'o';

    return(
        <boardtile className={styles.boardtile}>
        <button className={`${styles['box']} ${styles[choice]}`} onClick={onClick}>{value}</button>
        </boardtile>
    )
}