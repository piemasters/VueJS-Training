import Vue from 'vue'
import VueRouter from 'vue-router'

import Quotes from "./components/quotes/Quotes.vue";

import Slayer from "./components/slayer/Slayer.vue";

import Trader from "./components/trader/Trader.vue";
import Home from "./components/trader/Home.vue";
import Portfolio from "./components/trader/portfolio/Portfolio.vue";
import Stocks from "./components/trader/stocks/Stocks.vue";

import Login from "./components/login/Login.vue";
import WelcomePage from './components/login/welcome/welcome.vue';
import DashboardPage from './components/login/dashboard/dashboard.vue';
import SignupPage from './components/login/auth/signup.vue';
import SigninPage from './components/login/auth/signin.vue';

import store from './store/store';

Vue.use(VueRouter)

export const routes = [{
        path: "/trader",
        component: Trader,
        children: [{
                path: "/",
                component: Home
            },
            {
                path: "/portfolio",
                component: Portfolio
            },
            {
                path: "/stocks",
                component: Stocks
            }
        ]
    },
    {
        path: "/slayer",
        component: Slayer
    },
    {
        path: "/quotes",
        component: Quotes
    },
    {
        path: "/login",
        component: Login,
        children: [{
                path: '/',
                component: WelcomePage
            },
            {
                path: '/signup',
                component: SignupPage
            },
            {
                path: '/signin',
                component: SigninPage
            },
            {
                path: '/dashboard',
                component: DashboardPage,
                beforeEnter(to, from, next) {
                    if (store.state.login.idToken) {
                        next()
                    } else {
                        next('/signin')
                    }
                }
            }
        ]
    }
];

export default new VueRouter({mode: 'history', routes})