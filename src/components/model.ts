import {Dispatch, FormEvent, SetStateAction} from "react";

export interface Todo {
	id: number
	content: string
	isDone: boolean
}

export interface ToDoFormProps {
	todoContent: string
	setTodo: Dispatch<SetStateAction<string>>
	addTodo: (e: FormEvent<EventTarget>) => void
}


export interface SingleTodoProps {
	index: number
	todo: Todo
	todos: Todo[]
	setTodos: Dispatch<SetStateAction<Todo[]>>
}

export interface TodosProps {
	todos: Todo[]
	setTodos: Dispatch<SetStateAction<Todo[]>>
	completedTodos: Todo[]
	setCompletedTodos: Dispatch<SetStateAction<Todo[]>>
}

export interface SubTodosProps {
	isActiveDragOver: boolean
}

export interface SingleTodoIsDrag{
	isDrag:boolean
}