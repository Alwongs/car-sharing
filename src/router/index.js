import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage'
import OrderPage from '../views/OrderPage'
import TabLocation from '../components/OrderTabLocation'
import TabModel from '../components/OrderTabModel'
import TabExtra from '../components/OrderTabExtra'
import TabTotal from '../components/OrderTabTotal'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage        
    },
    {
        path: '/order',
        name: 'order',
        component: OrderPage,
        children: [
            {
                path: 'location',
                name: 'location',
                component: TabLocation
            },
            {
                path: 'model',
                name: 'model',
                component: TabModel
            },
            {
                path: 'extra',
                name: 'extra',
                component: TabExtra
            },
            {
                path: 'total',
                name: 'total',
                component: TabTotal
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
