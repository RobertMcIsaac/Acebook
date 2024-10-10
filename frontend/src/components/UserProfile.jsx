import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const UserProfile = (props) => {

    return (
        <>
        <Container>
            <ListGroup>
            <ListGroup.Item className='max-width-item pale-grey-bg m-3 shadow-sm'>
            <Row>
                <Col xs={3} md={3} lg={2} className="d-flex justify-content-start">
                    <Image src={props.user.imgURL} roundedCircle className='profile-picture'/>
                </Col>
                <Col xs={9} md={9} lg={10} className="d-flex align-items-center">
                <div className="text-start">
                    <h3 className="fw-bold">{props.user.username}</h3>
                    <p className='text-muted'>{props.user.email}</p>
                </div>
                </Col>
                </Row>
                </ListGroup.Item>
            </ListGroup>
            </Container>
        </>
    )
}

export default UserProfile;
