import React from 'react'
import './SideBar.css'
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom'
import { FaSellsy } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className='menu1'>
                <div className='span'>
                    <span className='title'>Dashboard</span><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdHome className='icon3' />
                    <Link to='/' className='link active'>Home</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <IoAnalytics className='icon3'/>
                    <Link className='link'>Analytics</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <FaSellsy className='icon3'/>
                    <Link className='link'>Sales</Link><br />
                </div>
            </div>
            <div className='menu1'>
                <div className='span'>
                    <span className='title'>Quick Menu</span><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <FaUsers className='icon3'/>
                    <Link to= '/users' className='link'>Users</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <FaUserPlus className='icon3'/>
                    <Link to='/newuser' className='link'>New User</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdOutlineProductionQuantityLimits className='icon3'/>
                    <Link to='products' className='link'>Products</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <FaDollarSign className='icon3'/>
                    <Link className='link'>Transaction</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Reports</Link><br />
                </div>
            </div>
            <div className='menu1'>
                <div className='span'>
                    <span className='title'>Notification</span><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Mail</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Feedback</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Messages</Link><br />
                </div>
            </div>
            <div className='menu1'>
                <div className='span'>
                    <span className='title'>Staff</span><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Manage</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Analistic</Link><br />
                </div>
                <div className='link' style={{ width: "100%" }}>
                    <MdReport className='icon3'/>
                    <Link className='link'>Reports</Link><br />
                </div>
            </div>
        </div>
    )
}