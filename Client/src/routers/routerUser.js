import PathUser from '../configs/pathUser';

import Home from '../pages/UserPage/HomePage/Home';
import Product from '../pages/UserPage/ProductPage/Product';
import ProductDetails from '../pages/UserPage/ProductDetailsPage/ProductDetails';
import Cart from '../pages/UserPage/CartPage/Cart';
import Checkout from '../pages/UserPage/CheckoutPage/Checkout';
import Login from '../pages/UserPage/LoginPage/Login';
import Register from '../pages/UserPage/RegisterPage/Register';
import UserProfile from '../pages/UserPage/UserProfilePage/UserProfile';
import UserHistoryOrder from '../pages/UserPage/UserHistoryOrderPage/UserHistoryOrder';
import About from '../pages/UserPage/AboutPage/About';
import Contact from '../pages/UserPage/ContactPage/Contact';
import Blog from '../pages/UserPage/BlogPage/Blog';
import BlogDetails from '../pages/UserPage/BlogDetailsPage/BlogDetails';



const publicRouterUser = [
  {
    path: PathUser.Home,
    component: Home
  },
  {
    path: PathUser.Product,
    component: Product
  },
  {
    path: PathUser.ProductDetails,
    component: ProductDetails
  },
  {
    path: PathUser.Cart,
    component: Cart
  },
  {
    path: PathUser.Checkout,
    component: Checkout
  },
  {
    path: PathUser.Login,
    component: Login
  },
  {
    path: PathUser.Register,
    component: Register
  },
  {
    path: PathUser.UserProfile,
    component: UserProfile
  },
  {
    path: PathUser.UserHistoryOrder,
    component: UserHistoryOrder
  },
  {
    path: PathUser.About,
    component: About
  },
  {
    path: PathUser.Contact,
    component: Contact
  },
  {
    path: PathUser.Blog,
    component: Blog
  },
  {
    path: PathUser.BlogDetails,
    component: BlogDetails
  }
  
];
export default publicRouterUser;
