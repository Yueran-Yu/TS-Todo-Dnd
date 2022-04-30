interface Todo {
	id: number
	content: string
	isDone: boolean
}

interface ToDoFormProps {
	todoContent: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
	addTodo: (e: React.FormEvent<EventTarget>) => void
}

interface SingleTodoProps {
	index: number
	todo: Todo
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

interface TodosProps {
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
	completedTodos: Todo[]
	setCompletedTodos: Dispatch<React.SetStateAction<Todo[]>>
}

interface SubTodosProps {
	isActiveDragOver: boolean
}

interface SingleTodoIsDrag {
	isDrag: boolean
}