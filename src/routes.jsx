import Home from "./pages/Home"
import ProductDataList from "./pages/ProductDataList"
import Weblog from "./pages/Weblog"
import Login from "./pages/login"
import Register from "./pages/Register"
import About from "./pages/About"
import AllWeblog from "./pages/AllWeblog"
import AllProduct from "./pages/AllProduct"
import ContactUs from "./pages/ContactUs"

let routes = [
    {path: '/',element: <Home />},
    // {path: '/productdatalist',element: <ProductDataList />},
    {path: '/productdatalist/:id',element: <ProductDataList />},
    {path: '/weblog/:id',element: <Weblog />},
    {path: '/login',element: <Login />},
    {path: '/register',element: <Register />},
    {path: '/about',element: <About />},
    {path: '/weblogs',element: <AllWeblog />},
    {path: '/products',element: <AllProduct />},
    {path: '/contactus',element: <ContactUs />},
]
export default routes