import logo from "./logo.svg";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import Item from "./Components/Item/Item";
import Form from "./Components/Form/Form";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
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
            <Col>
              <Item
                title="Organiza tu Día"
                text="Da el primer paso para alcanzar grandes resultados."
              />
              <Item
                title="Planifica tu Éxito"
                text="Cada meta comienza con una pequeña acción hoy"
              />
              <Item
                title="Cumple tus Sueños"
                text="No pongas límites a lo que puedes lograr."
              />
              <Item
                title="Gestiona tu Tiempo"
                text="Cada minuto cuenta. ¡Haz que valga la pena!"
              />
              <Item
                title="Avanza con Propósito"
                text="Tus metas son el mapa hacia tus sueños."
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
