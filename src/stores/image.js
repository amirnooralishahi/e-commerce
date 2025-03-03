import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useImageStore = defineStore('useImageStore', () => {
  const images = ref([]); // مقدار اولیه، یک آرایه‌ی خالی است

  async function getImages() {
    try { 
      const res = await axios.get(`https://demo.spreecommerce.org/api/v2/storefront/products?include=images`);
      
      // چک کردن مقدار دریافتی
      // console.log("📦 داده‌های دریافتی از API:", res.data.included);
      
      images.value = res.data.included || []; // جلوگیری از مقدار null یا undefined
    } catch (error) {
      console.error("❌ خطا در دریافت تصاویر:", error);
    }
  }

  getImages(); // درخواست داده‌ها هنگام اجرا

  return { getImages, images };
});

