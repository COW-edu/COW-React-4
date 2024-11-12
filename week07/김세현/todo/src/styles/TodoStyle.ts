import { createGlobalStyle } from 'styled-components';

const TodoStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }

  h1 {
    color: #333;
    text-align: center;
  }

  input[type="text"] {
    padding: 10px;
    width: 300px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
  }

  button:hover {
    background-color: #218838;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  span {
    flex-grow: 1;
  }

  .completed {
    text-decoration: line-through;
    color: #888;
  }

  .editing {
    margin-top: 10px;
  }
`;

export default TodoStyle;
