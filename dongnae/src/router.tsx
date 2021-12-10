import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';

const Home = React.lazy(() => import('./pages/home'));
const Bucheon = React.lazy(() => import(/* webpackChunkName: "dongnae_anyang" */ './pages/dongnae/bucheon'));

const Router: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dongnae/anyang" component={Bucheon} />
            </Switch>
        </React.Suspense>
    );
};

export default withRouter(Router);
