import React, { Component } from 'react'
import { Button, Card } from "react-bootstrap";

function ResultCard(props) {
    const {item} = props

    const handleClick = () => {
        console.log('I was clicked')
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.summary}
                    </Card.Text>
                    <Button onClick={handleClick} variant="primary">view full info</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ResultCard