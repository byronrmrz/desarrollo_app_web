// import {TODOS } from './components/todos';
// import {GOALS} from './components/goals';
import logo from "./logo.svg";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import Item from "./Components/Item/Item";
import Form from "./Components/Form/Form";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import "bootstrap-icons/font/bootstrap-icons.css";
import AddingMobilebutton from "./Components/AddingMobileButton/AddingMobileButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, initAddTodo } from "./reducers/todoSlice";
// import './Components/todos'

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);
  const arr = [
    {
      name: "caminar al perro 1",
    },
    {
      name: "caminar al perro 2",
    },
  ];
  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item));
    });

    // initFetch();
  }, []);
  return (
    <div className="App">
      <Menu></Menu>

      <Container>
        <Row>
          <h1>Control de Tareas</h1>
          <Col>
            <Form></Form>
          </Col>
          <Col>
            <Row>
              <div className="scrolling">
                {todos.map((todo, index) => {
                  return <Item key={index} 
                  name={todo.name} 
                  description={todo.description}
                  dueDate = {todo.dueDate}  />;
                })}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
