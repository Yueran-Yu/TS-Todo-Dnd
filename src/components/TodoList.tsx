import React, {FC} from 'react';
import {SubTodosRemove, SubTodos, SubTodosHeading, TodosContainer} from './index.styles';
import {TodosProps} from './model';
import TodoItem from "./Todo";
import {Droppable} from "react-beautiful-dnd";



const TodoList: FC<TodosProps> = ({todos, setTodos, completedTodos, setCompletedTodos}): JSX.Element => {
	return (
		<TodosContainer>
			<Droppable droppableId="todosLit">
				{
					(provided, snapshot) => (
						<SubTodos ref={provided.innerRef}
											{...provided.droppableProps}
											isActiveDragOver={snapshot.isDraggingOver}>
							<SubTodosHeading>Active Tasks</SubTodosHeading>
							{
								todos?.map((item, index) => (
									<TodoItem
										index={index}
										key={item.id}
										todos={todos}
										setTodos={setTodos}
										todo={item}/>))
							}
							{provided.placeholder}
						</SubTodos>
					)
				}
			</Droppable>

			<Droppable droppableId="todos_Remove">
				{
					(provided,snapshot) => (
						<SubTodosRemove
							ref={provided.innerRef}
							{...provided.droppableProps}
							isCompleteDragOver={snapshot.isDraggingOver}>
							<SubTodosHeading>Completed Tasks</SubTodosHeading>
							{
								completedTodos?.map((item, index) => (
									<TodoItem
										index={index}
										key={item.id}
										todos={completedTodos}
										setTodos={setCompletedTodos}
										todo={item}/>))
							}
							{provided.placeholder}
						</SubTodosRemove>
					)}
			</Droppable>
		</TodosContainer>
	)
}

export default TodoList;
