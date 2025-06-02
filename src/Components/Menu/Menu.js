import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/optionSlice';
import { FaTasks, FaBullseye } from 'react-icons/fa';

import './Menu.scss';

function Menu() {
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const handleChange = (newOption) => {
    if (option !== newOption) {
      dispatch(changeOption(newOption));
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-title">Proyecto Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto nav-links">
            <Nav.Link
              className={`nav-item ${option === 'tasks' ? 'active' : ''}`}
              onClick={() => handleChange('tasks')}
            >
              <FaTasks className="icon" /> Tareas
            </Nav.Link>
            <Nav.Link
              className={`nav-item ${option === 'goals' ? 'active' : ''}`}
              onClick={() => handleChange('goals')}
            >
              <FaBullseye className="icon" /> Metas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;