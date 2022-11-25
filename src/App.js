import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import InventoryCard from './components/Card/InventoryCard';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/Signup/Signup';
import AddInventory from './pages/AddInventory/AddInventory';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import ManageItems from './pages/ManageItems/ManageItems';
import RequireAuth from "./pages/login/RequireAuth/RequireAuth";
import MyItems from './pages/MyItems/MyItems';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './components/MyProfile/MyProfile';
import MyOrder from './components/MyOrder/MyOrder';
import AddReview from './components/AddReview/AddReview';
import Purchase from './pages/Purchase/Purchase';
import Payment from './pages/Dashboard/Payment';
import RequireAdmin from './pages/login/RequireAuth/RequireAdmin';
import Users from './pages/Dashboard/Users';
import MyPortFolio from './pages/MyPortfolio/MyPortFolio';


function App() {

  

  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/myportfolio" element={<MyPortFolio/>}></Route>

        <Route path="/addinventory" element={
      <RequireAuth>
        <RequireAdmin>
        <AddInventory></AddInventory>
        </RequireAdmin>
      </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
      <RequireAuth>
        <RequireAdmin>
        <InventoryDetail></InventoryDetail>
        </RequireAdmin>
      </RequireAuth>
        }></Route>
        <Route path="/manageinventory" element={
      <RequireAuth>
        <RequireAdmin>
        <ManageItems></ManageItems>
        </RequireAdmin>
      </RequireAuth>
        }></Route>
        <Route path="payment/:id" element={<Payment/>}></Route>

<Route path="/myitems" element={
      <RequireAuth>
        <RequireAdmin>
        <MyItems/>
        </RequireAdmin>
      </RequireAuth>
        }></Route>
        <Route path="/purchase/:id" element={
      <RequireAuth>
       <Purchase/>
      </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
      <RequireAuth>
        <Dashboard/>
      </RequireAuth>
        }>

       <Route path="/dashboard/myprofile" element={<RequireAuth><MyProfile/></RequireAuth>}></Route>
       <Route path="/dashboard/addreview" element={<RequireAuth>
         <AddReview/>
       </RequireAuth>}></Route>
       <Route path="/dashboard/myorders" element={<RequireAuth>
         <MyOrder/>
       </RequireAuth>}></Route>
       <Route path="/dashboard/manageproducts" element={<RequireAuth>
        <ManageItems></ManageItems>
       </RequireAuth>}></Route>
       <Route path="/dashboard/addproduct" element={<RequireAuth>
        <AddInventory></AddInventory>
       </RequireAuth>}></Route>
       <Route path="/dashboard/users" element={<RequireAuth><RequireAdmin>
         <Users/>
         </RequireAdmin></RequireAuth>}></Route>



        </Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer/>
      </div>
    
  );
}

export default App;
