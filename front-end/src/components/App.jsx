import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import KidRegistration from '../components/KidRegistration/KidRegistration';
import Presence from '../components/Presence/Presence';
import History from '../components/History/History';
import Information from '../components/Information/Information';
import Home from '../components/Home/Home';
import '../assets/style.css';
import { AuthContextProvider } from '../context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App () {

    return (

        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setToken={() => {}}/>}/>
                    <Route path='/sign-up' element={<Register />}/>
                    <Route path='/register' element={<KidRegistration token={''} />}/>
                    <Route path='/presence' element={<Presence token={''} />}/>
                    <Route path='/history/:id' element={<History token={''} />}/>
                    <Route path='/info/:id' element={<Information token={''} />}/>
                    <Route path='/home' element={<Home token={''} />}/>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>

    );

}