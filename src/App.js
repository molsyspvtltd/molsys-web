// import {CssBaseline, makeStyles, React, UINavBar,} from "./component"
// import './App.css';
// import {useSelector} from "react-redux";
// import {useEffect} from "react";
// import {setAuthToken} from "./auth/authDispatcher";
// import AppNotificationComponent from "./shared/notification/app-notification-component";
// import LoadingIndicatorComponent from "./shared/loader/loading-indicator-component";
// import ConfirmMessageComponent from "./shared/confirm/confirm-message-component";
// import AboutUS from "./Pages/AboutUS";
// import ContactUs from "./Pages/Contact";
// import Home  from "./Pages/Home";
// import Pms from './Pages/Pms';
// import G_cell from './Pages/G_Cell';
// import WellnessAssessment from "./Pages/WellnessAssessment";
// import Footer from './component/Footer';
// import Documents from "./Pages/Documents";
// import Market from './Pages/Market';
// import WholeGenomeSequencing from './Servicespages/WholeGenomeSequencing';
// import rnaSequencing from './Servicespages/rnaSequencing';
// import MetagenomeAnalysisPage from './Servicespages/MetagenomeAnalysisPage';
// import SmallRNASeqPage from './Servicespages/SmallRNASeqPage';
// import ChIPSeqPage from './Servicespages/ChIPSeqPage';
// import WholeGenomeReSeqPage from './Servicespages/WholeGenomeRe-SeqPage';
// import WholeExomeAnalysisPage from './Servicespages/WholeExomeAnalysisPage';
// import BiocloudServicesPage from './Servicespages/BiocloudServicesPage';
// import SampleIsolationPage from './Servicespages/SampleIsolationPage';
// import WholeGenomeSeqGen from './Servicespages/WholeGenomeSeqGen';
// import SMetagenomeSequencing from './Servicespages/16SMetagenomeSequencing';
// import ITSMetagenomeSequencing from './Servicespages/ITSMetagenomeSequencing';
// import GenotypingbySequencing from './Servicespages/GenotypingbySequencing';
// import Agrigenotyping from './Servicespages/Agrigenotyping';
// import LivestockGenotyping from './Servicespages/LivestockGenotyping';
// import PetGenotyping from './Servicespages/PetGenotyping';
// import MouseArrays from './Servicespages/MouseArrays';
// import HumanArrays from './Servicespages/HumanArrays';
// import MetaTranscriptomeAnalysisPage from './Servicespages/MetaTranscriptomeAnalysisPage';
// import OligosForm from './forms/OligosForm';
// import DataGenerationform from './forms/DataGenerationform';
// import DataAnalysisform from './forms/DataAnalysisform';
// import notification from './shared/notification/notificationpopup';
// import Careers from "./Pages/Careers";
// import Privacypolicy from "./Pages/Privacypolicy";
// import { Route, Switch, Redirect } from 'react-router-dom';




// const useStyles = makeStyles((theme) => ({

//   '@global': {
//     body: {
//       backgroundColor: '#e6e6e6'
//     },
//     footer:{
//       marginTop:'calc(5% + 60px)',
//       bottom: 0
//     }
//   },
//   footer:{
//     marginTop:'calc(5% + 60px)',
//     bottom: 0
//   }


// }));


// function App() {
//   const classes = useStyles();
//   const {user,token,isLoggedIn,roles} = useSelector(state => state.auth);

//   const auth = {user,token,isLoggedIn,roles}



//   let homePage = '/home'

//   if(isLoggedIn)
//     homePage ='/profile'

//   useEffect(() => {


//     if(token && user){
//       setAuthToken(token)

//     }

//   }, [token]);

//   return (<React.Fragment>

//         <LoadingIndicatorComponent></LoadingIndicatorComponent>
//         <UINavBar />
//         {/* {isLoggedIn && <Drawer />} */}
//         <ConfirmMessageComponent/>
//         <Switch >
//           <Route path='/home' component={Home} /> 
//           <Route path='/aboutUs' component={AboutUS} />
//           <Route path='/contactUs' component={ContactUs} />
//           {/* <Route path='/services' component={Services} /> */}
//           <Route path='/documents' component={Documents} />
//           <Route path='/Market' component={Market} />
//           <Route path='/pms' component={Pms} />
//           <Route path='/g-cell' component={G_cell} />
//           <Route path='/Privacypolicy' component={Privacypolicy} />
//           <Route path='/Careers' component={Careers} />
//           <Route path='/wellnessAssessment' component={WellnessAssessment} />
//           <Route path='/WholeGenomeSequencing' component={WholeGenomeSequencing}/>
//           <Route path='/rnaSequencing' component={rnaSequencing} />
//           <Route path='/MetagenomeAnalysisPage' component={MetagenomeAnalysisPage} />
//           <Route path='/SmallRNASeqPage' component={SmallRNASeqPage} />
//           <Route path='/ChIPSeqPage' component={ChIPSeqPage} />
//           <Route path='/WholeGenomeReSeqPage' component={WholeGenomeReSeqPage} />
//           <Route path='/WholeExomeAnalysisPage' component={WholeExomeAnalysisPage} />
//           <Route path='/BiocloudServicesPage' component={BiocloudServicesPage} />
//           <Route path='/SampleIsolationPage' component={SampleIsolationPage}/>
//           <Route path='/WholeGenomeSeqGen' component={WholeGenomeSeqGen} />
//           <Route path='/SMetagenomeSequencing' component={SMetagenomeSequencing}/>
//           <Route path='/ITSMetagenomeSequencing' component={ITSMetagenomeSequencing} />
//           <Route path='/GenotypingbySequencing' component={GenotypingbySequencing}/>
//           <Route path='/Agrigenotyping' component={Agrigenotyping} auth={isLoggedIn}/>
//           <Route path='/LivestockGenotyping' component={LivestockGenotyping}/>
//           <Route path='/PetGenotyping' component={PetGenotyping}/>
//           <Route path='/MouseArrays' component={MouseArrays}/>
//           <Route path='/HumanArrays' component={HumanArrays}/>
//           <Route path='/MetaTranscriptomeAnalysisPage' component={MetaTranscriptomeAnalysisPage}/>
//           <Route path='/OligosForm' component={OligosForm} />
//           <Route path='/DataGenerationform' component={DataGenerationform}/>
//           <Route path='/DataAnalysisform' component={DataAnalysisform}/>
//           <Route path='/notification' component={notification}  />

//           {/* <Route path="/">
//             <Redirect to={homePage} />
//           </Route> */}
//           <Route exact path="/">
//   <Redirect to={homePage} />
// </Route>

//         </Switch>
//         <Footer />

//         <AppNotificationComponent/>


//     </React.Fragment>

//   );
// }

// export default App;

import { CssBaseline, makeStyles, React, UINavBar, } from "./component";
import './App.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setAuthToken } from "./auth/authDispatcher";
import AppNotificationComponent from "./shared/notification/app-notification-component";
import LoadingIndicatorComponent from "./shared/loader/loading-indicator-component";
import ConfirmMessageComponent from "./shared/confirm/confirm-message-component";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/Contact";
import Home from "./Pages/Home";
import Pms from './Pages/Pms';
import G_cell from './Pages/G_Cell';
import WellnessAssessment from "./Pages/WellnessAssessment";
import Footer from './component/Footer';
import Documents from './Pages/Documents';
import Market from './Pages/Market';
import WholeGenomeSequencing from './Servicespages/WholeGenomeSequencing';
import rnaSequencing from './Servicespages/rnaSequencing';
import MetagenomeAnalysisPage from './Servicespages/MetagenomeAnalysisPage';
import SmallRNASeqPage from './Servicespages/SmallRNASeqPage';
import ChIPSeqPage from './Servicespages/ChIPSeqPage';
import WholeGenomeReSeqPage from './Servicespages/WholeGenomeRe-SeqPage';
import WholeExomeAnalysisPage from './Servicespages/WholeExomeAnalysisPage';
import BiocloudServicesPage from './Servicespages/BiocloudServicesPage';
import SampleIsolationPage from './Servicespages/SampleIsolationPage';
import WholeGenomeSeqGen from './Servicespages/WholeGenomeSeqGen';
import SMetagenomeSequencing from './Servicespages/16SMetagenomeSequencing';
import ITSMetagenomeSequencing from './Servicespages/ITSMetagenomeSequencing';
import GenotypingbySequencing from './Servicespages/GenotypingbySequencing';
import Agrigenotyping from './Servicespages/Agrigenotyping';
import LivestockGenotyping from './Servicespages/LivestockGenotyping';
import PetGenotyping from './Servicespages/PetGenotyping';
import MouseArrays from './Servicespages/MouseArrays';
import HumanArrays from './Servicespages/HumanArrays';
import MetaTranscriptomeAnalysisPage from './Servicespages/MetaTranscriptomeAnalysisPage';
import OligosForm from './forms/OligosForm';
import DataGenerationform from './forms/DataGenerationform';
import DataAnalysisform from './forms/DataAnalysisform';
import notification from './shared/notification/notificationpopup';
import Careers from "./Pages/Careers";
import WorkshopRegistration from "./Pages/WorkshopRegistrationPage";
import Privacypolicy from "./Pages/Privacypolicy";
import { Route, Switch, Redirect, HashRouter, useHistory, useLocation } from 'react-router-dom';
import FloatingButton from './component/FloatingButton'; // Import FloatingButton
import Analysisform from './Pages/Analysisform';
import CancerTestDashboard from './component/CancerTestDashboard';
import CancerTestForm from './component/CancerTestForm';
import Omics from "./Pages/Omics";
import Registration from "./Pages/Registration";

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: '#e6e6e6'
    },
    footer: {
      marginTop: 'calc(5% + 60px)',
      bottom: 0
    }
  },
  footer: {
    marginTop: 'calc(5% + 60px)',
    bottom: 0
  }
}));

function App() {
  const classes = useStyles();
  const { user, token, isLoggedIn, roles } = useSelector(state => state.auth);

  const auth = { user, token, isLoggedIn, roles }
  const history = useHistory();
  const location = useLocation();

  let homePage = '/home';

  if (isLoggedIn) homePage = '/profile';

  useEffect(() => {
    if (token && user) {
      setAuthToken(token);
    }
  }, [token]);

  return (
    <React.Fragment>
      <LoadingIndicatorComponent />
      <UINavBar />
      {/* {isLoggedIn && <Drawer />} */}
      <ConfirmMessageComponent />
      {location.pathname === "/home" && <FloatingButton />}

      {/* Using HashRouter for routing */}
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/aboutUs" component={AboutUS} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/documents" component={Documents} />
          <Route path="/Market" component={Market} />
          <Route path="/pms" component={Pms} />
          <Route path="/g-cell" component={G_cell} />
          <Route path="/Privacypolicy" component={Privacypolicy} />
          <Route path="/Careers" component={Careers} />
          <Route path="/wellnessAssessment" component={WellnessAssessment} />
          <Route path="/WholeGenomeSequencing" component={WholeGenomeSequencing} />
          <Route path="/rnaSequencing" component={rnaSequencing} />
          <Route path="/MetagenomeAnalysisPage" component={MetagenomeAnalysisPage} />
          <Route path="/SmallRNASeqPage" component={SmallRNASeqPage} />
          <Route path="/ChIPSeqPage" component={ChIPSeqPage} />
          <Route path="/WholeGenomeReSeqPage" component={WholeGenomeReSeqPage} />
          <Route path="/WholeExomeAnalysisPage" component={WholeExomeAnalysisPage} />
          <Route path="/BiocloudServicesPage" component={BiocloudServicesPage} />
          <Route path="/SampleIsolationPage" component={SampleIsolationPage} />
          <Route path="/WholeGenomeSeqGen" component={WholeGenomeSeqGen} />
          <Route path="/SMetagenomeSequencing" component={SMetagenomeSequencing} />
          <Route path="/ITSMetagenomeSequencing" component={ITSMetagenomeSequencing} />
          <Route path="/GenotypingbySequencing" component={GenotypingbySequencing} />
          <Route path="/Agrigenotyping" component={Agrigenotyping} auth={isLoggedIn} />
          <Route path="/LivestockGenotyping" component={LivestockGenotyping} />
          <Route path="/PetGenotyping" component={PetGenotyping} />
          <Route path="/MouseArrays" component={MouseArrays} />
          <Route path="/HumanArrays" component={HumanArrays} />
          <Route path="/MetaTranscriptomeAnalysisPage" component={MetaTranscriptomeAnalysisPage} />
          <Route path="/OligosForm" component={OligosForm} />
          <Route path="/DataGenerationform" component={DataGenerationform} />
          <Route path="/DataAnalysisform" component={DataAnalysisform} />
          <Route path="/notification" component={notification} />
          <Route path="/WorkshopRegistration" component={WorkshopRegistration} />
          <Route path="/Analysisform" component={Analysisform} />
          <Route path="/cancer" component={CancerTestDashboard} />
          <Route path="/request-test" component={CancerTestForm} />
          <Route path="/Omicsworkshop" component={Omics} />
          <Route path="/OmicsRegistration" component={Registration} />
        </Switch>
      </HashRouter>
      <Footer />
      <AppNotificationComponent />
    </React.Fragment>
  );
}

export default App;



