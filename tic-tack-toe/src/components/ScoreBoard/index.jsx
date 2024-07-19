import styles from './ScoreBoard.module.css';

export function Scoreboard({scores, xPlaying}) {
const {xScore, oScore} = scores;

    return (
        <div className={styles.scoreboard}>
            <span className={`${styles['score']} ${styles['x-score']} ${!xPlaying && styles.inactive}`}>X - {xScore}</span>
            <span className={`${styles['score']} ${styles['o-score']} ${xPlaying && styles.inactive}`}>O - {oScore}</span>
        </div>
    )
} 