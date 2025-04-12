import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDetailStore = defineStore('detailStore', () => {
  const allProduct = ref([])
  const colorProduct=ref([])
  const sizeProduct= ref([])
  const count=ref(0)
  
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
  async function filterByColor(colorSlug) {
    try {

      console.log(colorSlug);
      
      const url = `https://demo.spreecommerce.org/api/v2/storefront/products?filter[options][color]=${colorSlug}`
      const res = await axios.get(url)
      colorProduct.value = res.data.data
      console.log(colorProduct.value);
      
    } catch (error) {
      console.error('Filter error:', error)
    }
  }
  async function filterBySize(sizeSlug) {
    try {

      console.log(sizeSlug);
      
      const url = `https://demo.spreecommerce.org/api/v2/storefront/products?filter[options][size]=${sizeSlug}`
      const res = await axios.get(url)
      sizeProduct.value = res.data.data
      console.log(sizeProduct.value);
      
    } catch (error) {
      console.error('Filter error:', error)
    }
  }

  
  getname()
  watch(count,()=>{
    getname()
  })
  return {
    sizeProduct,
    colorProduct,
    allProduct,
    count,
    getname,
    filterByColor,
    filterBySize,
  }
})

  