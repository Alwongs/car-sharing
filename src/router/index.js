import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage'
import OrderPage from '../views/OrderPage'
import TabLocation from '../components/OrderPage/TabLocation'
import TabModel from '../components/OrderPage/TabModel'
import TabExtra from '../components/OrderPage/TabExtra'
import TabTotal from '../components/OrderPage/TabTotal'
import TabConfirm from '../components/OrderPage/TabConfirm'
import TestPage from '../views/TestPage'

const routes = [
    {
        path: '/test',
        name: 'test-page',
        component: TestPage        
    },
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
            {
                path: 'confirm',
                name: 'confirm',
                component: TabConfirm
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
