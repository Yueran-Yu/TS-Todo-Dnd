import React, {FC, FormEvent, useEffect, useRef, useState} from 'react';
import {
	EditIcon,
	IconsContainer,
	SingleTodoFormContainer,
	SingleTodoInput,
	SingleTodoText,
	TodoIcons
} from "./index.styles";
import {SingleTodoProps, Todo} from "./model";
import {MdEditNote, MdOutlineDelete, MdCheckCircleOutline} from "react-icons/md";
import {Draggable} from "react-beautiful-dnd";



const TodoItem: FC<SingleTodoProps> = ({index, todo, todos, setTodos}) => {
	const [isEdit, setEdit] = useState<boolean>(false)
	const [editTodo, setEditTodo] = useState<Todo>(todo)
	const inputText = useRef<HTMLInputElement>(null)

	const handleEditTodo = (e: FormEvent<HTMLInputElement>) => {
		setEditTodo({...editTodo, content: e.currentTarget.value})
	}

	const handleIsEdit = (e: FormEvent, id: number) => {
		setEdit(!isEdit)
		if (isEdit) {
			handleSubmit(e, id)
		}
		if (inputText.current) {
			inputText.current.focus()
		}
	}

	const handleDelete = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleDone = (id: number): void => {
		setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
		setEdit(false)
	}

	const handleSubmit = (e: FormEvent, id: number) => {
		e.preventDefault()
		setTodos(todos.map(item => item.id === id ? {...item, content: editTodo.content} : item))
		setEdit(false)
	}

	useEffect(() => {
		inputText.current?.focus()
	}, [isEdit])

	return (
		<Draggable
			draggableId={todo.id.toString()}
			index={index}>
			{
				(provided,snapshot) => (
					<SingleTodoFormContainer
						className={todo.isDone? 'isDone':''}
						 isDrag={snapshot.isDragging}
						onSubmit={(e) => handleSubmit(e, todo.id)}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}>
						{
							isEdit ?
								<SingleTodoInput ref={inputText} type="text" value={editTodo.content} onChange={(e) => handleEditTodo(e)}/>
								: <SingleTodoText>{todo.content}</SingleTodoText>
						}
						<IconsContainer>
							<EditIcon className={todo.isDone ? 'isDone':''} onClick={(e) => handleIsEdit(e, todo.id)}><MdEditNote/></EditIcon>
							<TodoIcons onClick={() => handleDelete(todo.id)}><MdOutlineDelete/></TodoIcons>
							{/*Wrong: handleDone(todo.id) is called instead of passed as a reference!*/}
							{/*To avoid handleDone been called directly, we need to use the callback function here, when the Delete button clicked, the handleDone function will be called.*/}
							<TodoIcons onClick={() => handleDone(todo.id)}><MdCheckCircleOutline/></TodoIcons>
						</IconsContainer>
					</SingleTodoFormContainer>
				)
			}
		</Draggable>
	);
};

export default TodoItem;
