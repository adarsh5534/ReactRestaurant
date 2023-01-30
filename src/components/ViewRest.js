import React from 'react'
import  { useParams} from 'react-router-dom'
import { useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';

function viewRest() {
  const storeparams =useParams()
  const [restaurantlist, setRestaurantlist] = useState([])

    // function to api call datas inside json file

    const restaurantdata = async () => {
        // to convert json data to js by api call we use json
        await fetch('/restaurants.json')
            .then(data => {
                data.json()
                    .then(result => {
                        //  console.log(result);

                        setRestaurantlist(result.restaurants)
                    })
            })
    }
    const restData=  restaurantlist.find(item=>item.id==storeparams.id)

    useEffect(() => { // call back function
        restaurantdata()

    }, [] // empty string is defined here to prevent duplication of data while loading page
    )
  
return (

  <>
  {
    restData?(
      <Row>
        <Col className='p-1' sm={12} md={4} lg={4} xl={4}>
        <Image className='p-4' src={restData.photograph} fluid></Image>
        </Col>
        <Col>
  <h1 >{restData.name}</h1>   
  <h3>{restData.neighborhood}</h3>   
  <h4 >Cusine type: {restData.cuisine_type}</h4> 
  <h4>address type:{restData.address}</h4>
  <Operatingtime timedata={restData.operating_hours}></Operatingtime> 
<Review revdata ={restData.reviews}/>
        </Col>
      </Row>
    ):'null'
  }
  </>
)
}
export default viewRest