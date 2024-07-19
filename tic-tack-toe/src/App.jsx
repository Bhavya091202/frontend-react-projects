import { useState } from 'react';
import { Header } from './components/Header';
import { Board } from './components/board';
import { Scoreboard } from './components/ScoreBoard';
import { ResetButton } from './components/ResetButton';

function App() {
    const WIN_CONDITION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]; 
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setxPlaying] = useState(true);
    const [score, setScore] = useState({xScore: 0, oScore: 0});
    const [gameOver, setGameOver] = useState(false);


    function handleBoxClick(boxIndex) {
        const newBoard = board.map((value,index) => {
            if(index === boxIndex) {
                return xPlaying === true? 'X' : 'O';
            }
            return value;
        })

        const winner = checkWinner(newBoard);
        
        if(winner){
            if(winner === 'X'){
                setScore({xScore: score.xScore + 1, oScore: score.oScore});
            }else{
                setScore({xScore: score.xScore, oScore: score.oScore + 1});
            }
        }
        // console.log(score);

        setBoard(newBoard);
        setxPlaying(!xPlaying);
    }


    function checkWinner(board){
        for(let i = 0; i < WIN_CONDITION.length; i++){
            const [x, y, z] = WIN_CONDITION[i];

            if(board[x]!== null && board[x] === board[y] && board[x] === board[z]){
                // console.log(board[x]);
                setGameOver(true);
                return board[x];
            }
        }
    }

    function resetGame(){
        setBoard(Array(9).fill(null));
        setxPlaying(true);
        // setScore({xScore: 0, oScore: 0});
        setGameOver(false);
    }

    return (
        <>
            <Header />
            <Scoreboard scores={score} xPlaying={xPlaying} />
            <Board board={board} onClick={gameOver? resetGame : handleBoxClick} />
            <ResetButton resetGame={resetGame} />
        </>
    );
}

export default App
