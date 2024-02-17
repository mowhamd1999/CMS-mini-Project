import React from 'react'
import './Widgetlg.css'
import { transactions } from '../../datas'
export default function Widgetlg() {
    const Button = ({type}) => {
        return <button className={'widgetlgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetlg'>
            <h3 className="widgetlgTitle">Lastes TransAction</h3>
            <table className="widgetlgTable">
                <tr className="widgetlgTr">
                    <th className="widgetlgTh">Customer</th>
                    <th className="widgetlgTh">Date</th>
                    <th className="widgetlgTh">Amount</th>
                    <th className="widgetlgTh">Status</th>
                </tr>
                {transactions.map((transaction) => (
                    <tr className="widgetlgTr">
                    <td className="widgetlgUser">
                        <img src={transaction.img} className='widgetlgImg'/>
                        <span className='widgetlgName'>{transaction.name}</span>
                    </td>
                    <td className='widgetlgDate'>
                        {transaction.date}
                    </td>
                    <td className="widgetlgAmount">
                        ${transaction.amount}
                    </td>
                    <td className="widgetlgStatus">
                        <Button type={transaction.status} />
                    </td>
                </tr>
                ))}
            </table>
        </div>
    )
}
