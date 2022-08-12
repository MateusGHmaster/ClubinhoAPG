import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import KidRegistration from '../components/KidRegistration/KidRegistration';
import Presence from '../components/Presence/Presence';
import Information from '../components/Information/Information';
import Home from '../components/Home/Home';
import '../assets/style.css';
import { AuthContextProvider } from '../context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryHome from '../components/History/HistoryHome';
import HistoryByDate from '../components/History/HistoryByDate';
import HistoryByKid from '../components/History/HistoryByKid';
import HistoryByDateUnique from '../components/History/HistoryByDateUnique';
import HistoryByKidUnique from '../components/History/HistoryByKidUnique';

export default function App () {

    return (

        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login setToken={() => {}}/>}/>
                    <Route path='/sign-up' element={<Register />}/>
                    <Route path='/register' element={<KidRegistration token={''} />}/>
                    <Route path='/presence' element={<Presence token={''} />}/>
                    <Route path='/history' element={<HistoryHome token={''} />}/>
                    <Route path='/history-date/' element={<HistoryByDate token={''} />}/>
                    <Route path='/history-date-unique/:date' element={<HistoryByDateUnique token={''} />}/>
                    <Route path='/history-kid/' element={<HistoryByKid token={''} />}/>
                    <Route path='/history-kid-unique/:id' element={<HistoryByKidUnique token={''} />}/>
                    <Route path='/info/:id' element={<Information token={''} />}/>
                    <Route path='/home' element={<Home token={''} />}/>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>

    );

}