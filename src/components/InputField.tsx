import React, {ChangeEvent, FC, FormEvent, useRef} from 'react';
import {BtnContainer, InputContainer, FormContainer} from './index.styles';
import {ToDoFormProps} from "./model";


const InputField: FC<ToDoFormProps> = ({todoContent, setTodo, addTodo}): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null)

	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}

	return (
		<FormContainer onSubmit={
			(e: FormEvent<EventTarget>) => {
				addTodo(e)
				inputRef.current?.blur()
			}
		}>
			<InputContainer
				ref={inputRef}
				value={todoContent}
				onChange={changeValue}
				type="input"
				placeholder="Enter a task"/>
			<BtnContainer type='submit'>Submit</BtnContainer>
		</FormContainer>
	);
};

export default InputField;
