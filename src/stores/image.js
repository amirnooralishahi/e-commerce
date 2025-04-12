import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useImageStore = defineStore('useImageStore', () => {
  const images = ref([]); // مقدار اولیه، یک آرایه‌ی خالی است

  async function getImages() {
    try { 
      const res = await axios.get(`https://demo.spreecommerce.org/api/v2/storefront/products?include=images`);
      images.value = res.data.included || [];
      
    } catch (error) {
      console.error("❌ خطا در دریافت تصاویر:", error);
    }
  }

  getImages(); // درخواست داده‌ها هنگام اجرا

  return { getImages, images };
});

