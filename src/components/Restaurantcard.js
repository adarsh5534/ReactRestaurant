import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// importing link to view card w/o using button tag 
import { Link } from 'react-router-dom';

function Restaurantcard({ data_Restlist }) {

    return (
        <Col className='p-2' sm={3} md={3} lg={4} xl={3}>

       <Link style={{ textDecoration:"none"}} to= {`view-restaurant/${data_Restlist.id}`}>



<Container >
<Card className='mt-4 text-center' style={{ width: '100%' ,boxShadow:"10px -2px 20px 2px rgb(0 0 0 /30%)" }}>
     <Card.Img variant="top" src={data_Restlist.photograph} />
     <Card.Body>
         <Card.Title>{data_Restlist.name}</Card.Title>
         <Card.Text>
            {data_Restlist.neighborhood}
         </Card.Text>
         
     </Card.Body>
 </Card>
</Container>



</Link>
</Col>
    )
}

export default Restaurantcard