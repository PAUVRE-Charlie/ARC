/**
 * This file is the main component of the website.
 * All the other components of the website are its children.
*/

/* Packages */
// used for navigating between pages
// the Switch/Redirect couple is used to redirect any user to a certain page when the path doesn't match any route
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

/* Styles */
import './styles.css'

/* Pages */
// the home page of the website
import HomePage from '../pages/HomePage'
import ArticlesPage from '../pages/ArticlesPage'
import ArticlePage from '../pages/ArticlePage'

/* Components */
// the header component
import Header from '../components/Header'

/* Data */
import colors from '../data/colors'

export default function App() {
  return (
    <Router>
      <div style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
        <Header />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route exact path={process.env.PUBLIC_URL + '/articles/:category'} component={({match}) => <ArticlesPage match={match} />} />
          <Route exact path={process.env.PUBLIC_URL + '/articles/:category/:id'} component={({match}) => <ArticlePage match={match} />} />
          <Redirect to={process.env.PUBLIC_URL + '/'} />
        </Switch>
      </div>
    </Router>
  );
}
