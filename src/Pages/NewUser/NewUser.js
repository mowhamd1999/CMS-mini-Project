import React, { useState } from 'react'
import './NewUser.css'
import { Row, Col } from 'react-bootstrap'
import { FaMandalorian } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function NewUser() {
  ///////////////////////////////////////////////////// get input 
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cash, setCash] = useState('')
  const [id, setId] = useState(0)
  const [count, setCount] = useState(0)
  ///////////////////////////////////////////////////// get input 
  ///////////////////////////////////////////////////// submithandler
  const submithandler = (event) => {
    event.preventDefault()
    let newUser = {
      firstname,
      lastname,
      address1,
      address2,
      city,
      state,
      image,
      email,
      phone,
      cash,
      id
    }
    setId(++newUser.id)
    // setCount(count + 1)
    setFirstName('')
    setLastName('')
    setAddress1('')
    setAddress2('')
    setCity('')
    setState('')
    setImage('')
    setEmail('')
    setPhone('')
    setCash('')
    console.log(newUser)
    fetch('https://mohammad-website-default-rtdb.firebaseio.com/Users.json', {
      method: "POST",
      body: JSON.stringify(newUser)
    }).then(response => console.log(response))
    return newUser
  }
  ///////////////////////////////////////////////////// submithandler
  return (
    <div className='form'>
      <div className='company-name'>
        <FaMandalorian className='newuserIcon' />
        <h2>Logo</h2>
      </div>
      <div className='company-info'>
        <p>Company name</p>
        <p>500 Corporate Dr.</p>
        <p>CompanyTown, Ir, Tehran, 12345</p>
      </div>
      <h1 style={{ textAlign: "center", paddingTop: '15px', paddingBottom: '5px' }}>New Member Registration</h1>
      <form onSubmit={submithandler} action="submit">
        <Row className='row'>
          <Col className='col1'>
            <label className='label'>First Name <span className='req'>*</span></label><br />
            <input value={firstname} onChange={(event) => setFirstName(event.target.value)} className='input' type="text" required />
          </Col>
          <Col className='col2'>
            <label className='label'>Last Name <span className='req'>*</span></label><br />
            <input value={lastname} onChange={(event) => setLastName(event.target.value)} className='input' type="text" required />
          </Col>
        </Row>
        <Row className='row'>
          <Col className='col1'>
            <label className='label'>Address <span className='req'>*</span></label><br />
            <input value={address1} onChange={(event) => setAddress1(event.target.value)} className='input' type="text" required />
          </Col>
          <Col className='col2'>
            <label className='label'>Address 2</label><br />
            <input value={address2} onChange={(event) => setAddress2(event.target.value)} className='input' type="text" />
          </Col>
        </Row>
        <Col className='col1'>
          <label className='label'>City <span className='req'>*</span></label><br />
          <input value={city} onChange={(event) => setCity(event.target.value)} className='input' type="text" />
        </Col>
        <Row className='row'>
          <Col className='col1' style={{ width: '40%', }}>
            <label className='label'>State <span className='req'>*</span></label><br />
            <select className='select' value={state} onChange={(event) => setState(event.target.value)}>
              <option></option>
              <option className='option' value="Active" >Active</option>
              <option className='option' value="Disable">Disable</option>
              <option className='option' value="Pro" >Pro</option>
            </select>
          </Col>
          <Col className='col2'>
            <label className='label'>Image <span className='req'>*</span></label><br />
            <input value={image} onChange={(event) => setImage(event.target.value)} className='img' type="file" />
          </Col>
        </Row>
        <Row className='row'>
          <Col className='col1'>
            <label className='label'>Email Address <span className='req'>*</span></label><br />
            <input value={email} onChange={(event) => setEmail(event.target.value)} className='input' type="email" required />
          </Col>
          <Col className='col2'>
            <label className='label'>Phone <span className='req'>*</span></label><br />
            <input value={phone} onChange={(event) => setPhone(event.target.value)} className='input' type="number" required />
          </Col>
        </Row>
        <Row className='row'>
          <Col className='col1'>
            <label className='label'>Cash $ <span className='req'>*</span></label><br />
            <input value={cash} onChange={(event) => setCash(event.target.value)} className='input' type="Number" required />
          </Col>
        </Row>
        <button className='button' type='submit'>Register</button>
      </form>
    </div>
  )
}
