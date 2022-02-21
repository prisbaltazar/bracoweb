import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import landing from './pages/landing';
import Hospital from './pages/HospitalMap';
import HospitalMap from './pages/HospitalMap';

const MyRoute=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element= {landing } />   
        <Route path="/app" element={<HospitalMap/>}/>
        </Routes>
         
        </BrowserRouter>
        
    );
}

export default Routes;