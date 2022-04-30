import styled, {css} from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 95%;
  position: relative;
  align-items: center;
`

export const InputContainer = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`

export const BtnContainer = styled.button`
  position: absolute;
  width: 90px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  right: 0;
  border: none;
  font-size: 20px;
  background-color: #709164;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px black;

  &:hover {
    background-color: #b8e5a7;
    color: #083708;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`

export const TodosContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-evenly;
  width: 95vw;
  align-items: center;

  @media (max-width: 800px) {
    width: 95%;
    flex-direction: column;
  }
`

export const SingleTodoFormContainer = styled.form<SingleTodoIsDrag>`
  display: flex;
  border-radius: 5px;
  min-width: 40vw;
  max-width: 45vw;
  padding: 10px 0;
  margin: 10px 20px;
  background-image: url("https://img.freepik.com/free-vector/white-gray-background-with-diagonal-lines-pattern_1017-25100.jpg?w=2000");
  transition: 0.2s;
  box-shadow: ${({isDrag}) => isDrag ? `0 0 20px #151212` : `0 0 5px #1d1d1d`};


  &.isDone {
    text-decoration: line-through red;
  }

  &:hover {
    box-shadow: 0 0 5px #1d1d1d;
    transform: scale(1.03);
  }

  @media (max-width: 800px) {
    min-width: 90vw;
  }
`
export const SingleTodoInput = styled.input`
  border: none;
  padding: 5px;
  font-size: 20px;
  width: 100%;

  &:focus {
    outline: none;
  }
`
export const SingleTodoText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  color: #0b276e;

  &:focus {
    outline: none;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  padding: 0 5px;
  align-items: center;
`

export const TodoIcons = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
  display: inline-flex;
  justify-items: center;
  color: #0b276e;
`
export const EditIcon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
  display: inline-flex;
  justify-items: center;
  color: #0b276e;
  visibility: visible;

  &.isDone {
    visibility: hidden;
  }
`

const commonTodosStyles = css`
  border-radius: 5px;
  display: flex;
  min-width: 40vw;
  width: 45vw;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  @media (max-width: 800px) {
    margin: 10px 0;
    width: 95vw;
  }
`

export const SubTodosHeading = styled.span`
  font-size: 35px;
  color: white;
`


export const SubTodos = styled.div<SubTodosProps>`
  ${commonTodosStyles};
  background-color: ${({isActiveDragOver}) => isActiveDragOver ? `rgb(8, 54, 245)` : `rgb(102, 125, 245)`};
`

interface SubTodosRemoveProps {
	isCompleteDragOver: boolean
}

export const SubTodosRemove = styled.div<SubTodosRemoveProps>`
  ${commonTodosStyles};
  background-color: ${({isCompleteDragOver}) => isCompleteDragOver ? `rgb(248, 89, 26)` : `rgb(245, 126, 79)`};
`

