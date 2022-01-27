import React, { lazy } from "react";
import {
  Route,
  Redirect,
  Switch,
  // BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga";

// import Navbar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import "./App.scss";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import ProjectList from "./components/ProjectList";
import Protected from "./components/Protected";
import TermsOFService from "./components/TermsOFService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import InvoiceGenerator from "./components/InvoiceGenerator";

const Bidding = lazy(() => import("./components/Bidding"));
const IdeaNetwork = lazy(() => import("./components/IdeaNetwork"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const OurServices = lazy(() => import("./components/OurServices"));
const FAQ = lazy(() => import("./components/FAQ"));
const Challenges = lazy(() => import("./components/Challenges"));
const CreativeProfile = lazy(() => import("./components/CreativeProfile"));

ReactGA.initialize("UA-175213256-1");

function App() {
  let location = useLocation();

  React.useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  }, [location]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/get-started" exact component={Bidding} />
          <Route path="/idea" exact component={IdeaNetwork} />
          <Route path="/profile" exact component={Homepage} />
          <Route path="/case-studies" exact component={CaseStudies} />
          <Route path="/challenges" exact component={Challenges} />
          <Route path="/terms-of-service" exact component={TermsOFService} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/frequently-asked-questions" exact component={FAQ} />
          <Route
            path="/creative-profile/:id/:slug"
            exact
            component={CreativeProfile}
          />
          <Route path="/projects" exact component={ProjectList} />
          <Route path="/invoice-generator" exact component={InvoiceGenerator} />
          {/* <Route path="/login" exact component={Login} /> */}
          {/* <Route exact path="/projects">
            <Protected Protect={ProjectList} />
          </Route> */}

          {/* <Route exact path="/projects/:id">
            <Protected Protect={ProjectView} />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </PersistGate>
    </Provider>
  );
}

export default App;
