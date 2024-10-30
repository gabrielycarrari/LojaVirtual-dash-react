import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import Products from "./Products"
import Users from "./Users"
import NotFound from "./NotFound"
import Orders from "./Orders"
import OrderDetails from "./OrderDetails"

const App = () => {
 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/orders/:id" element={<OrderDetails/>} />
          <Route path="/users" element={<Users/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App