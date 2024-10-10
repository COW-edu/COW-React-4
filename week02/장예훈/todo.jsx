import { useState } from 'react'

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addList = (event) => {
        event.preventDefault();
        if(inputValue.trim() !== "") {
            setTodoList([...todoList, inputValue]);
            setInputValue('');
        }
        else{
            setInputValue('');
        }
    }
    return (
        <PaintTodo
            inputValue={inputValue}
            setInputValue={setInputValue}
            todoList={todoList}
            addList={addList}
        />
    );
}

const PaintTodo = ({ inputValue, setInputValue,todoList, addList }) => {
    return(
        <div>
            <form className="App" onSubmit={addList}>
                <input
                    value={inputValue}
                    type='text'
                    placeholder={'할일을 입력하세요.'}
                    onChange={(event) => setInputValue(event.target.value)}/>
                <button onClick={addList}>추가</button>
            </form>
            <ul>
                {todoList.map((todoList) => <li>{todoList}</li>)}
            </ul>
        </div>
    )
}

export default App


