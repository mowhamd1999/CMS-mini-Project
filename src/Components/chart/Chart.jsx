import React from 'react'
import './Chart.css'
import { ResponsiveContainer, Line, LineChart, XAxis, CartesianGrid, Tooltip , YAxis} from 'recharts'
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer height="100%" width="100%" aspect={5}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke="gray"></XAxis>
          <YAxis ></YAxis>
          <Line dataKey='sale' stroke="blue" type='monotone' />
          <Tooltip />
          {grid && <CartesianGrid stroke='gray' strokeDasharray="4"></CartesianGrid>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
