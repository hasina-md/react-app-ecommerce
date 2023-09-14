import react from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import AuthenticationView from './components/AuthenticationView';

export default function AppRouter({children }) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={(routerProps => <AuthenticationView {...routerProps} isLogin={true}/>)}/>
        <Route path="/signup" render={(routerProps => <AuthenticationView {...routerProps} isLogin={false}/>)}/>

        <Route exact path="/products" component={ProductsList}  />
        <Route  path="/products/:id"  component={ProductDetails}  />


    </Switch>
}