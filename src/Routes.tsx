import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home'
import { Confirmation } from './pages/Confirmation';
import { Dashboard } from './pages/Dashboard';

export function Routes(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/confirmation" component={Confirmation}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    )
}