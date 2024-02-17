import './App.css';

import routes from './routes';
import {useRoutes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
function App() {
  let router = useRoutes(routes)

  return (
    <div>
      <Navbar />
      <div className='main'>
        <SideBar />
        {router}
      </div>
    </div>
  )
}
export default App;
