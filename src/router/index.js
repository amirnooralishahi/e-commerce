import { createRouter,createWebHistory }    from 'vue-router'
import Product from '../pages/Product.vue'
import BasketProduct from '../pages/BasketProduct.vue'

const routes= [
    {path:'/' , component: Product},
    {path:'/BasketProduct',component:BasketProduct},
]
const router= createRouter({history:createWebHistory(),
    routes,
})

export default router