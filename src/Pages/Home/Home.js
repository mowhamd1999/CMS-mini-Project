import React from 'react'
import Features from '../../Components/features/Features'
import './Home.css'
import Chart from '../../Components/chart/Chart'
import chartData from './../../datas'
import Widgetsm from '../../Components/widgets/Widgetsm'
import Widgetlg from '../../Components/widgets/Widgetlg'
export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart title='Mouth Sale' data={chartData} dataKey="sale" grid />
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  )
}
