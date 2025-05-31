import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { removeTodo  } from '../../reducers/todoSlice';
import { removeGoal } from '../../reducers/goalsSlice';

import { useDispatch } from 'react-redux';

function Item(props) {
  const removeItems = (e) => {
    e.preventDefault();
    if (props.type === 'task') {
      dispatch(removeTodo(props.id));
    } else if (props.type === 'goal') {
      dispatch(removeGoal(props.id));
    }
  };
  // const addItems = (e) => {
  //   e.preventDefault();
  //   dispatch(addTodo(props.name))
  // }
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