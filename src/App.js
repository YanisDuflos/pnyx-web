
import './App.css';
import NavigationBar from './pages/NavigationBar';
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toast'
// import CookieConsent from 'react-cookie-consent'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-HM4X56CG02";
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <div className="App font-body h-screen">
      <header className="App-header">
        {process.env.NODE_ENV === "development" ? <small className='w-full bg-slate-700 text-white'>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small> : <></>}
        {/* <NavigationBar /> */}
        {/* <Footer /> */}
        <ToastContainer delay="6000" position="bottom-right" />
        <Outlet />
        {/* <CookieConsent 
          debug={true}
          location="bottom"
          style={{ background: '#c7d2fe', textAlign: "left", color: "#000", paddingHorizontal: 24}}
          buttonStyle={{background: '#4f46e5', color: '#fff', borderRadius: 6}}
          buttonText="J'accepte"
          enableDeclineButton
          declineButtonStyle={{background: "#c7d2fe", color: '#000'}}
          declineButtonText="Je refuse"
          >
            Nous utilisons des cookies pour analyser votre usage du site et mieux répondre à vos besoins.
          </CookieConsent> */}
      </header>
      {/* <div className="App-body">
        <Outlet />
      </div> */}
    </div>
  );
}

export default App;
