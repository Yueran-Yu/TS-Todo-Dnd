import React, {FC, FormEvent, useEffect, useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from "./components/model";
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';


const App: FC = () => {
	const [todoContent, setTodoContent] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos") || '[]'))
	}, [])

	useEffect(() => {
		setCompletedTodos(JSON.parse(localStorage.getItem("completedTodos") || '[]'))
	}, [])

	useEffect(() => {
		// however. on a page reload, the value in the storage returns to an empty string,
		// This is happening because we've assigned a default empty string to the state variable, todos.
		//Hence, react uses the empty value on the initial render
		// Now, instead of assigning an empty string, we must get the updated state value at every point from the storage and assign it as the default state value.
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("completedTodos", JSON.stringify(completedTodos))

	}, [completedTodos])

	const addTodo = (e: FormEvent<EventTarget>) => {
		e.preventDefault()
		if (todoContent) {
			setTodos([...todos, {id: Date.now(), content: todoContent, isDone: false}])
			setTodoContent('')
		}
	}

	const onDragEnd = (result: DropResult) => {
		const {source, destination} = result
		let add, active = todos, complete = completedTodos

		if (!destination) return
		if (destination.droppableId === source.droppableId && destination.index === source.index) return

		if (source.droppableId === "todosLit") {
			add = active[source.index]
			active.splice(source.index, 1)
		} else {
			add = complete[source.index]
			complete.splice(source.index, 1)
		}

		// add to the destination
		if (destination.droppableId === 'todosLit') {
			add.isDone = false
			console.log("add.isDone")
			console.log(add.isDone)

			active.splice(destination.index, 0, add)
		} else {
			add.isDone = true
			console.log("add.isDone")
			console.log(add.isDone)

			complete.splice(destination.index, 0, add)
		}
		setCompletedTodos([...complete])
		setTodos([...active])
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="App">
				<span className='heading'>Typescript to do tasks</span>
				<InputField todoContent={todoContent} setTodo={setTodoContent} addTodo={addTodo}/>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}/>
			</div>
		</DragDropContext>
	);
}

export default App;
