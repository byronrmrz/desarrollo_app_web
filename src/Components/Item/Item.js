import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { removeTodo, addTodo } from '../../reducers/todoSlice';
import { useDispatch } from 'react-redux';

function Item(props) {
  const removeItems = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.name))
  };
  const addItems = (e) => {
    e.preventDefault();
    dispatch(addTodo(props.name))
  }
  const dispatch = useDispatch();
  return (
    <Card >
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text className="fw-bold">
          Description
        </Card.Text>
        <Card.Text>
        {props.description}        </Card.Text>
        <Card.Text className="fw-bold">
          Due Date
        </Card.Text>
        <Card.Text>
           {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info" >Editar</Button>
        <Button variant="info" onClick={removeItems} >Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;