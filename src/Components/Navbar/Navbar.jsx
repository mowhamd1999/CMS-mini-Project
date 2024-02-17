import React from 'react'
import './Navbar.css'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaMandalorian } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FaBell } from "react-icons/fa6";
export default function Navbar() {
    return (
        <Container className='container'>
            <Row className='Row'>
                <Col className='col-1'>
                    <Link className='left' to='/'><h3>Msoul</h3></Link>
                    <FaMandalorian className='icon1' />
                </Col>
                <Col className='col-2'>
                    <span className='spanicon'>2</span><FaBell className='icon2' />
                    <span className='spanicon'>2</span><TfiWorld className='icon2' />
                    <IoSettings className='icon2' />
                    <img src="/1.jpeg" />
                </Col>
            </Row>
        </Container>
    )
}
