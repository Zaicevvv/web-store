import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const ProfilePage = lazy(() =>
  import(
    './pages/ProfilePage/ProfilePage' /* webpackChunkName: "profile-page" */
  ),
);

const NewsPage = lazy(() =>
  import('./pages/NewsPage/NewsPage' /* webpackChunkName: "news-page" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "not-found" */),
);

const App = () => (
  <div>
    <Nav />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>

    <Footer />
  </div>
);

export default App;
