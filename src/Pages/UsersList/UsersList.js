import React from 'react'
import { useState, useEffect } from 'react'
import { userRow } from '../../datas'
import './UserList.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Table } from 'react-bootstrap';
export default function UsersList() {
  // let [userDatas, setuserDatas] = useState(userRow)
  ////////////////////////////////////////////////////////////get users from firebase (database)
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
  ////////////////////////////////////////
  const [users, setUsers] = useState([])
  const getusers = async () => {
    await fetch('https://mohammad-website-default-rtdb.firebaseio.com/Users.json')
      .then(response => response.json())
      .then(data => {
        setUsers(Object.entries(data))
      })
  }
  console.log(users)
  useEffect(() => {
    getusers()
  }, [])
  ////////////////////////////////////////////////////////////get users from firebase (database)


  return (
    <div className='userList'>
      <Table className='table' striped>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user , index) => (
            <tr>
              <td className='id'>{index + 1}</td>
              <td className='firstname'><img className='tableImage' src='1.jpeg' />{user[1].firstname}</td>
              <td className='lastname'>{user[1].lastname}</td>
              <td className='email'>{user[1].email}</td>
              <td className='status'>{user[1].state}</td>
              <td className='phone'>{user[1].phone}</td>
              <td className='value'>{user[1].cash} $</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
