import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VerifyRegistration from './pages/VerifyRegistration';
import VerifyEligibility from './pages/VerifyEligibility';
import PrepareRegistration from './pages/PrepareRegistration';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="verifier-inscription-listes" element={<VerifyRegistration />} />
          <Route path="verifier-eligibilite-inscription" element={<VerifyEligibility />} />
          <Route path="preparer-dossier-inscription" element={<PrepareRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
