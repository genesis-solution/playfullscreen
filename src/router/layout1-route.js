import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";

// Home
import Homepage from "../views/backend/home/home";

// Archive
import ArchiveDetails from "../views/backend/archive/archive-detail";
import ArchiveList from "../views/backend/archive/archive-list";

// Live
import LiveList from "../views/backend/live/live-list";
import LiveDetails from "../views/backend/live/live-detail";

// Upcoming
import Upcomingpage from "../views/backend/upcoming/upcoming";

//App
import UserAccountSettingList from "../views/backend/app/usermanagement/useraccountsetting";
import PurchaseHistory from "../views/backend/app/usermanagement/purchase/purchasehistory";
import AdmissionHistory from "../views/backend/app/usermanagement/admission/admissionhistory";


// Payment
import Pricing from "../views/backend/payment/pricing";
import Purchase from "../views/backend/payment/purchase";
import StripeSuccess from "../views/backend/payment/stripe/stripe_success";
import StripeCancel from "../views/backend/payment/stripe/stripe_cancel";


//blog
import Blog from "../views/backend/blog/blog";
import BlogDetail from "../views/backend/blog/blog-details";

//Extrapages
import FAQ from "../views/backend/pages/faq";
import TermsOfUse from "../views/backend/pages/extrapages/termsOfUse";
import PrivacyPolicy from "../views/backend/pages/extrapages/privacyPolicy";
import AboutUs from "../views/backend/pages/about-us";
import Contact from "../views/backend/pages/contact";
import ShowList from "../views/backend/show/show-list";
import Feed from "../views/backend/pages/feed";

//Broadcaster
import BroadcasterPage from "../views/backend/broadcaster/broadcaster";

//Team
import TeamPage from "../views/backend/team/team";

const Layout1Route = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        // key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          {/* homepage */}
          <Route path="/" exact component={Homepage} />

          {/* Archive */}
          <Route path="/archive" component={ArchiveList} />
          <Route path="/archive-details/:id">
            <SessionAuth>
              <ArchiveDetails />
            </SessionAuth>
          </Route>


          {/* Live */}
          <Route path="/live" component={LiveList} />
          <Route path="/live-details">
            <SessionAuth>
              <LiveDetails />
            </SessionAuth>
          </Route>

          {/* Upcoming */}
          <Route path="/upcoming" component={Upcomingpage} />

          {/* Account Setting */}
          <Route path="/setting">
            <SessionAuth>
              <UserAccountSettingList />
            </SessionAuth>
          </Route>

          {/* Purchase History */}
          <Route path="/purchase_history">
            <SessionAuth>
              <PurchaseHistory />
            </SessionAuth>
          </Route>
          <Route path="/admission_history">
            <SessionAuth>
              <AdmissionHistory />
            </SessionAuth>
          </Route>
          
          {/* Payment */}
          <Route path="/purchase">
            <SessionAuth>
              <Purchase />
            </SessionAuth>
          </Route>
          <Route path="/pricing-plan">
            <SessionAuth>
              <Pricing />
            </SessionAuth>
          </Route>

          <Route path="/success" component={StripeSuccess} />
          <Route path="/cancel" component={StripeCancel} />
          
          
          {/* Blog */}
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetail} />

          {/* Extrapages */}
          <Route path="/faq" component={FAQ} />
          <Route path="/terms-of-service" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path={"/feed"} component={Feed} />
          <Route path={"/show-list"} component={ShowList} />

          {/* broadcaster */}
          <Route path="/broadcaster" component={BroadcasterPage} />

          {/* team */}
          <Route path="/team" component={TeamPage} />

        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Layout1Route;
