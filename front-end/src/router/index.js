import { createRouter,createWebHashHistory }  from "vue-router"
import FrontList from '../view/FrontList.vue'
import IotList from '../view/IotList.vue'
import TimeLine from '../view/TimeLine.vue'
import About from '../view/About.vue'

const routes = [
    {
        path: '/', 
        redirect: '/home',
    }, {
        path:'/home',
        redirect: '/home/front',
        children:[
            {
                name: 'front',
                path: 'front',
                component: FrontList
            },
            {
                name: 'iot',
                path: 'iot',
                component: IotList
            },
            {
                name: 'timeline',
                path: 'timeline',
                component: TimeLine
            },
            {
                name: 'about',
                path: 'about',
                component: About
            }
        ],
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router