import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useColorStore = defineStore('ColorStore', () => {
    const color= ref('')
    const size = ref('')

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

    getcolor()

    getSize()
   return { 
    size,
    color,
    getcolor,
    getSize,
   } 
})

  