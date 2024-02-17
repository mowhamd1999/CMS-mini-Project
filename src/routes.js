import Home from "./Pages/Home/Home"
import UsersList from "./Pages/UsersList/UsersList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product"
let routes = [
    {path : '/' , element : <Home />},
    {path : '/users' , element : <UsersList />},
    {path : '/newuser' , element : <NewUser />},
    {path : '/products' , element : <Products />},
    {path : '/product/:productID' , element : <Product />},
]

export default routes