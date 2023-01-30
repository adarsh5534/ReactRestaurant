import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' // useEffect used here insted of ngOnInit
import Restaurantcard from './Restaurantcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Restuarantlist() {
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
    console.log(restaurantlist);
    useEffect(() => { // call back function
        restaurantdata()

    }, [] // empty string is defined here to prevent duplication of data while loading page
    )
    return (
//parent il row child il col
        <Row>
            {
                restaurantlist.map(item=>(
                    <Restaurantcard data_Restlist={item} />
                ))
              

            }
           
        </Row>
    )
}


export default Restuarantlist