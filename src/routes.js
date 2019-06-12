import Landing from './components/Landing'
import Login from './components/Login'
import Portfolio from './components/Portfolio'
// import Wallet from './components/Wallet'
import Market from './components/Market'
import Users from './components/Users'
import Company from './components/Company'

export const routes = [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
     { path: '/company', component: Company },
    { path: '/portfolio', component: Portfolio },
    { path: '/market', component: Market },
    { path: '/users/', component: Users}

];