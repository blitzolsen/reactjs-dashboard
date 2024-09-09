import Widget from './Widget';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CardContainer(props) {
    const {widgets, deleteWidget} = props;
    return (
        <>
            <Container fluid>
                <Row xs={1} sm={2} md={3}>
                    {widgets.map((widget, index) => (
                        <Col key={index} className="mb-3">
                            <Widget deleteWidget={deleteWidget} index={index} type={widget} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
