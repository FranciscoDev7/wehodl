import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Strategies from '../pages/Strategies'
import Settings from '../pages/Settings'
import Portfolio from '../pages/Portfolio'
import DataInput from '../pages/DataInput'

const Routes: React.FC = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:id" exact component={Dashboard}/>
                <Route path="./transactions" exact component={Transactions}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="./strategies" exact component={Strategies}/>
                <Route path="/portolio" exact component={Portfolio}/>
                <Route path="./data-input" exact component={DataInput}/> 
            </Switch>
        </BrowserRouter>

    )
}


export default Routes