import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDetailStore = defineStore('detailStore', () => {
  const allProduct = ref([])
  const count=ref(0)
  console.log(count.value);
  
  async function getname() {
    try {
    await axios.get(`https://demo.spreecommerce.org/api/v2/storefront/products?page=${count.value}&per_page=20 `
      ).then(res=>{
        allProduct.value=res.data.data
      })
    } catch (error) {
      console.error('error:', error)
    }
  }

  
  getname()
  watch(count,()=>{
    getname()
  })
  return {


    allProduct,
    count,
    getname,
  }
})

  