
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDetailStore = defineStore('detailStore', () => {
  const price = ref([])
  const count=ref(0)
  async function getname() {
    try {
      console.log(count.value);
      
      axios.get(`https://demo.spreecommerce.org/api/v2/storefront/products?page=${count.value}`
      ).then(res=>{
        price.value=res.data.data
      })
 
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  
  watch(count,()=>{
    getname()
  })
  return {
    price,
    count,
    getname,
  }
})

  