import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './pages/home'));
const Anyang = React.lazy(() => import(/* webpackChunkName: "dongnae_anyang" */ './pages/dongnae/anyang'));
const Bucheon = React.lazy(() => import(/* webpackChunkName: "dongnae_anyang" */ './pages/dongnae/bucheon'));

const Router: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={() => <Redirect to="/home" />} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/dongnae/bucheon" component={Bucheon} />
                <Route exact path="/dongnae/anyang" component={Anyang} />
            </Switch>
        </React.Suspense>
    );
};

export default withRouter(Router);
