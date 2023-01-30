import React, { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';



function Review({revdata}) {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
            {
                revdata.map(data=>
                    <div className='p-2 mt-1'>
                    <h1>{data.name} {data.date}</h1>
<h6>{data.rating}</h6>
<p>{data.comments}</p>
                    </div>
                )
            }
           </div>
      </Fade>
    </>
  )
}

export default Review