
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
  const full=ref()

 function get(){
    let params = [
      `page=${count.value}`,
      `per_page=20`,
      `include=images`
    ];
    
    if (selectedSize.value) {
      params.push(`filter[options][size]=${selectedSize.value}`);
    }
    
    if (selectedColor.value) {
      params.push(`filter[options][color]=${selectedColor.value}`);
    }
    
    let url = `https://demo.spreecommerce.org/api/v2/storefront/products?${params.join('&')}`;
    
    axios.get(url)
      .then(res => {
        fullProduct.value= res.data.data
        size.value=res.data.meta.filters.option_types[1].option_values
        color.value=res.data.meta.filters.option_types[0].option_values
        images.value = res.data.included || [];


        
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }

get()


  return {
   images, 
    color,
    size,
    selectedColor,
    selectedSize,
    fullProduct,
    count,
    full,
    get,
  }
})


  