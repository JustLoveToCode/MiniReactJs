import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Import all of the Website Pages from the Other pages folder
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import {useState} from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
    const [user,setUser]=useState(null);
    
  return(
  <BrowserRouter>
  
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='products/:productId' element={<SingleProduct/>}/>
                <Route path='login' element={<Login setUser={setUser}></Login>}/>
                <Route 
                path='dashboard' 
                element={
                <ProtectedRoute user={user}>
                    <Dashboard user={user}/> 
                </ProtectedRoute>
                }
                />
                <Route path='*' element={<Error/>}/>
                <Route path='dashboard' element={<div>Dashboard</div>}/>
                <Route path="stats" element={<div>stats</div>}/>
            </Route>
        </Routes>

  </BrowserRouter>
  )
}

export default App;
