//router
import React from "react";
import { useState } from "react";
import { Switch,Route } from 'react-router-dom';
import Layout1 from './layouts/backend/layout1';
import SignUp from './views/backend/pages/auth/signup';
import UserProfile from '../src/views/backend/app/usermanagement/userprofile';

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import Passwordless, { signOut } from "supertokens-auth-react/recipe/passwordless";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import SessionExpiredPopup from "./components/SessionExpiredPopup";


import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
//scss files
import './assets/css/bootstrap.min.css'
import './assets/css/typography.css'
import './assets/css/style.css';
import './assets/css/responsive.css'
import  './assets/css/custom.css';


import { ToastContainer } from 'react-toast'

export function getApiDomain() {
  const apiUrl = process.env.REACT_APP_API_URL || `https://api.playfullscreen.a2hosted.com`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `https://api.playfullscreen.a2hosted.com`;
  return websiteUrl;
}

SuperTokens.init({
  appInfo: {
      appName: "Playfullscreen", // TODO: Your app name
      apiDomain: getApiDomain(), // TODO: Change to your app's API domain
      websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
  },
  recipeList: [
      Passwordless.init({
        contactMethod: "EMAIL_OR_PHONE",
        palette: {
          primary: "#0069d9",
          background: "transparent",
          textTitle: "white",
          textLabel: "white",
          textPrimary: "white",
          superTokensBrandingBackground: "transparent",
          superTokensBrandingText: "transparent",
          headerTitle: "dasds"
          // ...
        },
        style: {
          container: {
            fontFamily: "Roboto",
            boxShadow: "none",
            marginBottom: 0,
            width:"100% !important"
          },
          superTokensBranding: {
            height: 0
          },
          inputWrapper: {
            height: 50,
            fontSize: 16,
            backgroundColor: "#fafafa40",
            color: "white",
            border: "none",
            borderRadius: 0
          },
          input: {
            height: 50,
            backgroundColor: "transparent",
            fontSize: 16,
            color: "white",
          },
          button: {
            backgroundColor: '#0069d9',
            color: '#fff',
            border: 'none',
            borderRadius: 0,
            height: '50px',
            margin: '0 auto',
            padding: '12px 24px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400,
          },
        },
        signInUpFeature: {
          disableDefaultUI: true,
          defaultCountry: "CA",
          emailOrPhoneFormStyle: {
            phoneInputCountryOptionLabel: {
                // Applied to a span inside phoneInputCountryOption, that shows the name of the country
                color: "black"
            },
          }
        }
      }),
      Session.init(),
  ],
});

function App() {
  let [showSessionExpiredPopup, updateShowSessionExpiredPopup] = useState(false);

  return (
    <SuperTokensWrapper>
      <div className="App">
        <ToastContainer position="top-right" delay="3000" /> 
        <Switch>
          {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
          
          <Route path="/secured">
            <SessionAuth
                onSessionExpired={() => {
                  updateShowSessionExpiredPopup(true);
                }}>
                  <h1>Secured</h1>
                {showSessionExpiredPopup && <SessionExpiredPopup />}
            </SessionAuth>
          </Route>
          <Route path="/manage-profile" >
            <SessionAuth
                onSessionExpired={() => {
                  updateShowSessionExpiredPopup(true);
                }}>
                  <UserProfile />
                {showSessionExpiredPopup && <SessionExpiredPopup />}
            </SessionAuth>
          </Route>
          <Route path="/auth" component={SignUp} />
          <Route path="/" component={Layout1} />
        </Switch>
      </div>
    </SuperTokensWrapper>
  );
}

export default App;
