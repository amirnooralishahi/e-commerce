import { createRouter,createWebHistory }    from 'vue-router'
import HelloWorld from '../components/Product.vue'
import BasketProduct from '../components/BasketProduct.vue'

const routes= [
    {path:'/' , component: HelloWorld},
    {path:'/BasketProduct',component:BasketProduct},
]
const router= createRouter({history:createWebHistory(),
    routes,
})

export default router