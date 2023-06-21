import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="card5.jpeg" />
        <Card.Body>
          <Card.Title>Nosso dia</Card.Title>
          <Card.Text>
            Entenda mais sobre o dia do Combate 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Apoie a causa</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="card4.jpeg" />
        <Card.Body>
          <Card.Title>Protestos</Card.Title>
          <Card.Text>
            Nossos protestos e como lutamos{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Ajude na luta </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="card6.jpg" />
        <Card.Body>
          <Card.Title>Estatisicas</Card.Title>
          <Card.Text>
            Aqui você encontra estatisticas
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">No combate contra o Feminicidio</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;