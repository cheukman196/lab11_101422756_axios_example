import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Container, Row, Col, CardBody } from 'react-bootstrap';

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    const getPersons = async() => {
        const personUrl = "https://randomuser.me/api/?results=10";
        try {
            const response = await axios.get(personUrl);
            setPersons(response.data.results)
            console.log("Persons attribute content")
            console.log(persons)
            
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getPersons();
    }, [])

    return (
        <Container>
            {persons.length > 0 ? (persons.map((person, index) => (
                <Row key={index}>
                    <Card>
                        <CardBody>
                            <div class="d-flex justify-content-center">
                                <div class="p-2 m-5">
                                    <img class="rounded" src={person.picture.large}></img>
                                </div>
                                <div class="p-2">
                                <Card.Title>{person.name.first} {person.name.last}</Card.Title>
                                    <p><b>Email:</b> {person.email}</p>
                                    <p><b>Phone:</b> {person.phone}</p>
                                    <p><b>City:</b> {person.location.city}</p>
                                    <p><b>State:</b> {person.location.state}</p>
                                    <p><b>Country:</b> {person.location.country}</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Row>
                ))) : (
                    <h3 class="text-center">Loading...</h3>
                  )
            }
        </Container>
    )
}
