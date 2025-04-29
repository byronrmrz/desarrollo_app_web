import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Form.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
        <Form.Text className="text-muted">
          Verifica tu correo que tenga el siguiente formato: correo@ejemplo.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mantener mi sesión abierta" />
      </Form.Group>
      <Button variant="primary" className="login-button">
        Iniciar Sesión <i className="bi bi-person ms-2"></i>
      </Button>
    </Form>
  );
}

export default Formulario;
