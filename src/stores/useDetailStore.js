import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDetailStore = defineStore('detailStore', () => {
  const fullProduct= ref([])
  const count=ref(0)
  const selectedColor = ref()
  const selectedSize = ref()
  const color= ref('')
  const size = ref('')
  const images = ref([]);
  async function getImages() {
    try { 
      const res = await axios.get(`https://demo.spreecommerce.org/api/v2/storefront/products?include=images`);
      images.value = res.data.included || [];
      
    } catch (error) {
      console.error("❌ خطا در دریافت تصاویر:", error);
    }
  }
  async function getcolor( ){ 
      try{
          await axios.get('https://demo.spreecommerce.org/api/v2/storefront/products').then(res=>{
              color.value=res.data.meta.filters.option_types[0].option_values
              
          }
          )

      }
      catch (error) {
          console.error('error:', error)
        }
  }
  async function getSize( ){ 
        try{
            await axios.get('https://demo.spreecommerce.org/api/v2/storefront/products').then(res=>{
                size.value=res.data.meta.filters.option_types[1].option_values

                            
                
            }
            )

        }
        catch (error) {
            console.error('error:', error)
          }
  }
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



getImages()
getcolor()
getSize()
  watch(count,()=>{
    getname()
  })
  return {
   images, 
    color,
    size,
    selectedColor,
    selectedSize,
    fullProduct,
    count,
    filterByFull,
    getcolor,
    getSize,
 getImages,

  }
})

  