import { createRouter,createWebHistory }    from 'vue-router'
import HelloWorld from '../components/Product.vue'
import cardItem from '../components/BasketProduct.vue'

const routes= [
    {path:'/' , component: HelloWorld},
    {path:'/card-item',component:cardItem},
]
const router= createRouter({history:createWebHistory(),
    routes,
})

export default router