import React from 'react';
import ReactDOM from 'react-dom/client';    //这里使用的是v6，v6 switch变为Routes，Route的component变为element，两者不兼容，注意。
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} /> 
        </Routes>
    </BrowserRouter>
)
