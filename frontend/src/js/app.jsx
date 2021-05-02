import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';
/* prettier-ignore */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import clsx from 'clsx';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TuneIcon from '@material-ui/icons/Tune';
import LandingPage from './pages/landing_page';
import About from './pages/about';
import Events from './pages/events';
import Scheduler from './pages/scheduler';
import Layout from './components/layout';
import styles from './components/layout.module.css';
import Logo from '../images/logo.png';

function App({ title }) {
  console.log('Title:', title);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Layout>
        <Router>
          <div>
            <div className={clsx(styles.header, 'flex items-center text-sm font-semibold text-gray-800')}>
              <div className="pl-8 pr-12">
                <Link to="/">
                  <img src={Logo} height={26} width={86} alt="invercio" />
                </Link>
              </div>
              <ul className="flex flex-grow">
                <li className="px-4">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                  <Link to="/events">Events</Link>
                </li>
                <li className="px-4">
                  <Link to="/scheduler">Content Scheduler</Link>
                </li>
              </ul>
              <span className="pr-4">
                <TuneIcon fontSize="small" />
              </span>
              <span className="pl-20 pr-4">
                <NotificationsIcon fontSize="small" />
              </span>
              <AccountCircleIcon />
              <span className="pl-2 pr-6">Admin</span>
            </div>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/scheduler">
                <Scheduler />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </Layout>
    </MuiPickersUtilsProvider>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
