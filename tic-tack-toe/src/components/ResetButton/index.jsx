import styles from './ResetButton.module.css';

export function ResetButton({resetGame}) {
    return (
        <button className={styles.resetButton} onClick={resetGame}>Reset</button>
    )
}