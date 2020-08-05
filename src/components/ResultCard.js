import React, { Component } from 'react'
import { Button, Card } from "react-bootstrap";

function ResultCard(props) {
    const {item, setDisplayFullInfo} = props
    console.log(setDisplayFullInfo)

    const handleClick = () => {
        console.log('I was clicked')
        setDisplayFullInfo(item)
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="card-text-summary">
                        {item.summary}
                    </Card.Text>
                    <div className="overlay"></div>
                    <Button onClick={handleClick} variant="primary">view full info</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ResultCard