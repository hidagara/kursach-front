import Landing from './components/Landing'
import Login from './components/Login'
import Portfolio from './components/Portfolio'
// import Wallet from './components/Wallet'
import Market from './components/Market'


export const routes = [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    // { path: '/wallet', component: Wallet },
    { path: '/portfolio', component: Portfolio },
    { path: '/market', component: Market },

];