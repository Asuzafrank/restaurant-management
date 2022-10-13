import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import AddResto from './components/AddResto.vue';
import UpdateResto from './components/UpdateResto.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
    name: 'Home',
    component: Home,
    path: '/'
},
{
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up'
},
{
    name: 'Login',
    component: Login,
    path: '/login'
},
{
    name: 'AddResto',
    component: AddResto,
    path: '/addresto'
},
{
    name: 'UpdateResto',
    component: UpdateResto,
    path: '/updateresto/:id'
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router;