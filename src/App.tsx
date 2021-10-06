import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SiteLayout from "./SiteLayout";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Groceries" />
                    </Route>
                    <Route path="/Groceries">
                        <SiteLayout taskListId={1} />
                    </Route>
                    <Route path="/Films">
                        <SiteLayout taskListId={2} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}

export default App;
