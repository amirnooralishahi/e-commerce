import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDetailStore = defineStore('detailStore', () => {
  const allProduct = ref([])
  const colorProduct=ref([])
  const sizeProduct= ref([])
  const fullProduct= ref([])
  const count=ref(0)
  const selectedColor = ref()
  const selectedSize = ref()

  async function filterByFull() {
    try {
      const params = []
  
      if (selectedSize.value) {
        params.push(`filter[options][size]=${selectedSize.value}`)
      }
  
      if (selectedColor.value) {
        params.push(`filter[options][color]=${selectedColor.value}`)
      }

      let url = `https://demo.spreecommerce.org/api/v2/storefront/products?page=${count.value}&per_page=20`
      if (params.length > 0) {
        url += `&${params.join('&')}`
      }

      const res = await axios.get(url)
      fullProduct.value = res.data.data
      console.log("Fetched:", fullProduct.value)

    } catch (error) {
      console.error("Filter error:", error)
    }
}



  
  
  watch(count,()=>{
    getname()
  })
  return {
    selectedColor,
    selectedSize,
    fullProduct,
    count,
    filterByFull
  }
})

  