import { BoardTile } from "../BoardTile";
import styles from "./board.module.css";

export function Board({board, onClick}) {
    return (
        <board className={styles.board}>
            {board.map((value, index) => (
                <BoardTile value={value} onClick={() => value === null && onClick(index)} />
            ))}
            {/* <BoardTile value="X" onClick={null} /> */}
        </board>
    )
}