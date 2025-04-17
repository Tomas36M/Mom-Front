import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Register from './views/register/Register'
import ErrorPage from './components/errorPage/ErrorPage'
import UserProfile from './views/user/userProfile/UserProfile'
import UserHome from './views/user/userHome/UserHome'
import UserAppointments from './views/user/userAppointments/UserAppointments'
import CreateAppointment from './views/user/craeteAppointment/CreateAppointment'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'


const App = () => {

    return (
        <main className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<ProtectedRoute element={<UserHome />}/>}/>
                <Route path="/profile" element={<ProtectedRoute element={<UserProfile />}/>}/>
                <Route path="/appointments" element={<ProtectedRoute element={<UserAppointments />}/>}/>
                <Route path="/newappointment" element={<ProtectedRoute element={<CreateAppointment />}/>}/>
                <Route path="*" element={<ErrorPage />}/>             
            </Routes>
            <Footer />
        </main>
    )
}

export default App
