import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
	const [editing, setEditing] = useState(false);

	const handleEditing = () => {
		setEditing(true);
	};

	const handleUpdatedDone = (event) => {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	};

	let viewMode = {};
	let editMode = {};
	if (editing) {
		viewMode.display = 'none';
	} else {
		editMode.display = 'none';
	}

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<input
					type='checkbox'
					checked={itemProp.completed}
					onChange={() => handleChange(itemProp.id)}
				/>
				<input
					type='text'
					style={editMode}
					onChange={(e) => setUpdate(e.target.value, itemProp.id)}
					onKeyDown={handleUpdatedDone}
				/>
				<button onClick={handleEditing}>
					{/* <i className='fa fa-edit'></i> */}
					<AiFillEdit className={styles.blue} />
				</button>
				<button onClick={() => delTodo(itemProp.id)}>
					{/* <i className='fa fa-trash'></i> */}
					<FaTrash className={styles.pink} />
				</button>
				<span style={viewMode}>{itemProp.title}</span>
			</div>
		</li>
	);
};
export default TodoItem;

