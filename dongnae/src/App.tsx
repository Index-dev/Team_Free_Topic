import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';

const Page1 = React.lazy(() => import(/*webpackChunkName: "page1"*/ './pages/page1'));
const Page2 = React.lazy(() => import(/*webpackChunkName: "page2"*/ './pages/page2'));

const App: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
            </Switch>
        </React.Suspense>
    );
};

export default withRouter(App);
