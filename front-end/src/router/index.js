import { createRouter,createWebHashHistory }  from "vue-router"
import FrontList from '../view/FrontList.vue'
import IotList from '../view/IotList.vue'
import TimeLine from '../view/TimeLine.vue'
import About from '../view/About.vue'
import MdEditor from '../components/MdEditor.vue'
import MyNav from '../components/MyNav.vue'
import Home from '../view/Home.vue'

const routes = [
    {
        path: '/', 
        component: Home,
        redirect: '/home/front',
        children: [
            {
                path: 'home',
                component: MyNav,
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
                ]
            }
        ]
    }, 
    {
        path:'/details',
        component: MdEditor
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router