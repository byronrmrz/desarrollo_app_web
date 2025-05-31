import './App.scss';
import  Menu  from './Components/Menu/Menu'
import FormTaskAndGoal from './Components/Form/Form';
import Item from './Components/Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  initAddTodo,
} from './reducers/todoSlice'
import {initAddGoal,
} from './reducers/goalsSlice'

function App() {
  const todos = useSelector((state) => state.todos.value);
  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.value);
  const dispatch = useDispatch();

async function initFetch() {
  try {
    const [taskRes, goalRes] = await Promise.all([
      fetch("http://localhost:4000/tasks/getTasks", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "13005169@br.gal",
        },
      }),
      fetch("http://localhost:4000/goals/getGoals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "13005169@br.gal",
        },
      }),
    ]);

    const [tasks, goals] = await Promise.all([taskRes.json(), goalRes.json()]);

    tasks.forEach((task) => dispatch(initAddTodo(task)));
    goals.forEach((goal) => dispatch(initAddGoal(goal)));

  } catch (err) {
    console.error("Error al obtener datos:", err);
  }
}
  
  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div className="App">
      <Menu/>
      {/*<Todos/> 
      <Goals/>*/} 

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
          <div className='scrolling'>
{option==='tasks' &&
  todos.map((todo, index)=>(
    <Item
      key={index}
      name={todo.name}
      description={todo.description}
      dueDate={todo.dueDate}
      id={todo._id} 
      type="task"   
    />
  ))
}      
{option==='goals' &&
  goals.map((goal, index)=>(
    <Item
      key={index}
      name={goal.name}
      description={goal.description}
      dueDate={goal.dueDate}
      id={goal._id}      
      type="goal"       
    />
  ))
}    
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;