import React from 'react'
import './Widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';
export default function Widgetsm() {
    return (
        <div className='widgetsm'>
            <span className='widgetsmTitle'>New Join Members</span>
            <ul className="widgetsmList">
                {newMembers.map(member => (
                    <li key={member.id} className="widgetsmItem">
                        <img src={member.img} className='widgetsmImg' />
                        <div className="widgetsmUser">
                            <spam className="widgetsmUserName">{member.username}</spam>
                            <span className="widgetsmUserTitle">{member.title}</span>
                        </div>
                        <button className="widgetsmButton">
                            <VisibilityIcon className='widgetsmIcon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
