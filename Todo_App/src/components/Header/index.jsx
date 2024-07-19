import todoLogo from '../../assets/Logo.svg';
import styles from './header.module.css';
import { CiCirclePlus } from "react-icons/ci";
import { useState } from 'react';

export function Header({onAddTasks}) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onAddTasks(title);
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }
    return(
        <header className={styles['header']}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
            <input type="text" placeholder="add new task" value={title} onChange={onChangeTitle} />
            <button>
                Create
                <CiCirclePlus size={20} />
            </button>
            </form>
        </header>
    )
}