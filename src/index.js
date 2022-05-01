import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import VerifyRegistration from './pages/VerifyRegistration';
// import VerifyEligibility from './pages/VerifyEligibility';
// import PrepareRegistration from './pages/PrepareRegistration';
import Manifesto from './pages/Manifesto';
import LandingBadlyRegisteredYouth from './pages/landings/LandingBadlyRegisteredYouth';
import Landing from './pages/landings/Landing';
import WorkInProgress from './pages/landings/WorkInProgress';
// import ArticleTemplate from './pages/articles/ArticleTemplate';
import Article from './pages/articles/Article';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />}/>
          {/* <Route path="verifier-inscription-listes" element={<VerifyRegistration />} />
          <Route path="verifier-eligibilite-inscription/*" element={<VerifyEligibility />} />
          <Route path="preparer-dossier-inscription" element={<PrepareRegistration />} /> */}
          <Route path="verifier-inscription-listes" element={<WorkInProgress />} />
          <Route path="verifier-eligibilite-inscription/*" element={<WorkInProgress />} />
          <Route path="preparer-dossier-inscription" element={<WorkInProgress />} />
          <Route path="comment-voter-elections-legislatives-2022" element={<Article />} />
          <Route path="manifeste" element={<Manifesto />} />
          <Route path="landing-jeunes" element={<LandingBadlyRegisteredYouth />} />
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
