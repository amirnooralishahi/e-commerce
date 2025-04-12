<template >
  <div class="header mt-3">
    <div class="header-contain p-3 d-flex w-100 justify-content-around">
      <div class="left d-flex gap-3">
        <router-link to="/BasketProduct" class="link">
        <div
          class="left-shop d-flex gap-3 align-items-center justify-content-center"
        >
          <span>سبد خرید</span>
          <div class="cart">
            <div class="circle">{{ shop }}</div>
            <i class="bi bi-cart2"></i>
          </div>
          
        </div>
      </router-link>
        <div
          class="left-account d-flex gap-2 align-items-center justify-content-center"
        >
          <span>حساب کاربری</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
            />
          </svg>
        </div>
      </div>
      <div class="center ">
        <div class="search d-flex border rounded-4 align-items-center">
          <div class="search-icon  p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#A72F3B"
              class="bi bi-search text-danger"
              viewBox="0 0 14 14"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </div>
          <input type="text " placeholder="" class="border-0 w-100 text-end" />
          <span class="placeholder bg-white stick pe-3"> استیکر </span>
        </div>
      </div>
      <div class="right">
        <img src="../assets/image/Frame 26088044.png" alt="" />
      </div>
    </div>
  </div>
  <div class="category w-100 mt-5 d-flex flex-column align-items-center">
    <div class="category-head d-flex w-75">
      <p>جشن و مهمانی</p>
      <p>کارت و پوستر</p>
      <p>مدرسه و اداره</p>

      <p>اکسسوری</p>
      <p>قاب موبایل</p>

      <p>لوازم خانه</p>

      <p>پوشاک</p>
    </div>
  </div>
  <div class="Card d-flex justify-content-center row">
    <div class="Card-contain d-flex flex-column col-9">
      <div class="Card d-flex flex-column justify-content-center w-100">
    <div class="filter-item d-flex w-100 mt-3">
      <div class="d-flex item w-100 justify-content-end">
        <p>ارزان ترین</p>
        <p>گران ترین</p>

        <p>پرفروش ترین</p>
        <p>جدید ترین</p>
        <div class="line d-flex flex-column gap-2">
          <span class="full">پربازدید ترین</span>
          <span class="line-down"></span>
        </div>
      </div>
    </div>
    <div class="Card-contain d-flex flex-column justify-content-center">
      <div class="cardItems d-flex justify-content-end row"  v-if="filter">
        <div class="cardItem border rounded-4 col-3" 
             v-for="(item, index) in usebook.allProduct" :key="index"
            
             >
          <cardItem   :item="item" :index="index" :image="useimage.images" v-model:shop="shop" />
          
        </div>
      </div>
      <div class="cardItems d-flex justify-content-end row"  v-if="filterColor">
        <div class="cardItem border rounded-4 col-3" 
             v-for="(item, index) in detailStore.colorProduct" :key="index"
            >
          <cardItem   :item="item" :index="index" :image="useimage.images" v-model:shop="shop" />
          
        </div>
      </div>
      <div class="cardItems d-flex justify-content-end row"  v-if="filterSize">
        <div class="cardItem border rounded-4 col-3" 
             v-for="(item, index) in detailStore.sizeProduct" :key="index"
            >
          <cardItem   :item="item" :index="index" :image="useimage.images" v-model:shop="shop" />
          
        </div>
      </div>
    </div>
  </div>
      
  
    </div>
    <div class="filter border rounded-3 ms-3 col-3 mt-5">
      <div
        class="filter-contain d-flex flex-column align-items-center gap-4 p-3"
      >
        <div class="title d-flex justify-content-between w-100 p-2">
          <span class="delete text-danger fw-bold">حذف فیلتر ها </span>
          <span class="">فیلتر ها </span>
        </div>
        <div class="design d-flex flex-column align-items-center w-100">
          <div class="up d-flex w-100 justify-content-center">
            <div class="icon w-25 d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <span class="w-75 text-end w-75 text-secondary">نوع طرح</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="distance d-flex flex-column align-items-center w-100">
          <div @click="clickSize" class="up d-flex w-100 justify-content-center">
            <div class="icon w-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <span class="text-end w-75 text-secondary">اندازه</span>
          </div>
          <div v-if="size" class="color-type d-flex flex-column w-100 border">
            <div
              v-for="(item, index) in localColor.size"
              :key="index"
              class="colors"
              @click="sendItemsSize(item)"
            >
              {{ item['name'] }}
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="color d-flex flex-column align-items-center w-100">
          <div @click="clickColor" class="up d-flex w-100 justify-content-center ">
            <div class="icon w-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <span class="text-end w-75 text-secondary">رنگ</span>
          </div>
          <div v-if="color" class="color-type d-flex flex-column w-100 border">
            <div
              v-for="(item, index) in localColor.color"
              :key="index"
              class="colors"
              @click="sendItems(item)"
            >
              {{ item['name'] }}
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="delivary  w-100   ">

            <div class="icon-check  w-100  ">
              <div
                class="form-check w-100 form-switch  d-flex justify-content-between"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label text-secondary"
                  for="flexSwitchCheckDefault"
                  >ارسال امروز</label
                >
              </div>
            </div>
          
          <div class="line"></div>
        </div>
        <div class="available w-100 ">
        
            <div class="icon-check d-flex w-100">
              <div
                class="form-check form-switch w-100 d-flex justify-content-between"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label text-secondary"
                  for="flexSwitchCheckDefault"
                  >فقط کالا های موجود</label
                >
              </div>
            </div>
    
          <div class="line"></div>
        </div>

        <div class="graphic  w-100 ">
         
            <div class="icon-check d-flex w-100">
              <div
                class="form-check form-switch w-100 d-flex justify-content-between"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label text-secondary text-end"
                  for="flexSwitchCheckDefault"
                  >فقط محصولات گرافیکی</label
                >
              </div>
            </div>
     
          <div class="line"></div>
        </div>
        <div class="price d-flex flex-column align-items-center w-100">
          <div class="up d-flex w-100 justify-content-center">
            <div class="icon w-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
            <span class="text-end w-75 text-secondary">محدوده قیمت</span>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="navigation w-75 mt-4 d-flex justify-content-center gap-3 align-items-center">
    <div
      class="next rounded-5 d-flex justify-content-center align-items-center"
    >
    <i class="bi bi-arrow-left left" id="left" @click="increase"></i>
    </div>
    <div
      class="navigation-contain d-flex border p-1 justify-content-center gap-4 rounded-5"
    >
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        50
      </div>
      <div class="">. . .</div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        10
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        9
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        8
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        7
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        6
      </div>

      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        5
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
        4
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
       3
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
    2
      </div>
      <div
        class="circle border border-black rounded-5 d-flex justify-content-center align-items-center"
      >
       1
      </div>
    </div>
    <div class="per rounded-5 d-flex justify-content-center align-items-center">
     
      <i class="bi bi-arrow-right right" @click="decrease" id="amir" ></i>
    </div>
  </div>
  <div class="footer_up p-5 w-100 d-flex justify-content-center mt-3">
    <div class="footer_up-contain d-flex w-100 px-5">
      <div class="left w-50 d-flex flex-column">
        <p class="text-white">ما را در شبکه های اجتماعی دنبال کنید</p>
        <div class="icon fs-4 d-flex gap-5">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-pinterest"></i>
          <i class="bi bi-youtube"></i>
        </div>
      </div>
      <div class="right w-75 d-flex flex-column align-items-end gap-1">
        <span class="text fw-normal text-white">
          برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را واردنمایید
        </span>
        <div class="d-flex gap-2">
          <button
            type="button"
            class="button border-0 rounded-3 text-white bg-red"
          >
            ثبت
          </button>
          <input
            type="email"
            class="email border border-white text-white rounded-2 text-end"
            placeholder="ایمیل شما "
          />
        </div>
      </div>
    </div>
  </div>
  

  <div class="footer_down w-100 d-flex justify-content-center">
    <div class="footer_down-contain mt-5 d-flex w-100 px-5 justify-content-center gap-4">
      <div class="shop w-50">
        <div class="shop-contain d-flex flex-column w-100 h-100">
          <span
            class="overflow-hidden w-100 fw-bold text-white text-center title"
          >
            فروشگاه اینترنتی کاستومی
          </span>
          <div class="info w-100 gap-5 d-flex justify-content-center">
            <div class="d-flex">
              <span class="">پاسخگویی 24 ساعته 7 روز هفته</span>
            </div>
            <div class="d-flex gap-2 justify-content-end">
              <span class=""> 021-3456000 </span>
              <span class="">: تماس با پشتیبانی </span>
            </div>
          </div>
          <div class="image d-flex gap-3 justify-content-center">
            <img src="../../public/image/01.jpg" alt="" class="image" />
            <img src="../../public/image/02.jpg" alt="" class="image" />
            <img src="../../public/image/03.jpg" alt="" class="image" />
          </div>
        </div>
      </div>
      <div class="guid w-25 d-flex flex-column align-items-end gap-4">
        <div class="buy d-flex flex-column align-items-center">
          <span class="text-white">راهنمای خرید</span>
          <div class="line"></div>
        </div>
        <div class="d-flex flex-column align-items-end gap-3">
          <span class="text">راهنمای ثبت سفارش</span>
          <span class="text"> شیوه های پرداخت</span>
          <span class="text"> نحوه ارسال سفارش ها </span>
          <span class="text"> شرایط بازگرداندن محصول</span>
        </div>
      </div>
      <div class="several w-25 d-flex flex-column gap-3 align-items-end gap-4">
        <div class="buy d-flex flex-column align-items-center">
          <span>خدمات مشتریان</span>
          <div class="line"></div>
        </div>
        <div class="d-flex flex-column align-items-end gap-3">
          <span class="text">سوالات متداول</span>
          <span class="text"> حریم خصوصی</span>
          <span class="text"> ثبت شکایت </span>
          <span class="text"> ضمانت نامه محصولات </span>
        </div>
      </div>
      <div class="with w-25 d-flex flex-column align-items-end gap-4">
        <div class="buy d-flex flex-column align-items-center">
          <span>همراه با کاستومی</span>
          <div class="line"></div>
        </div>
        <div class="d-flex flex-column align-items-end gap-3">
          <span class="text"> فروش محصولات </span>
          <span class="text"> فرصت همکاری </span>
          <span class="text"> تماس با ما </span>
          <span class="text"> نقشه سایت </span>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { onMounted,ref, watch } from 'vue';
import cardItem from './cardItem.vue';
import { useDetailStore } from '../stores/counter.js';
import { useImageStore } from '@/stores/image';
import {useColorStore} from '@/stores/localStorage'

const useimage = useImageStore()
const usebook = useDetailStore();
const localColor= useColorStore();
const detailStore = useDetailStore()


const color=ref(false)
const size = ref(false)
const filter= ref(true)
const filterColor=ref(false)
const filterSize=ref(false)
const clickColor=()=>{
  color.value=!color.value
}
const clickSize =()=>{ 
  size.value=!size.value
}
function sendItems(item) {
  const slug = item['name']
  
  detailStore.filterByColor(slug)
  filterColor.value=true

  filter.value=false
}
function sendItemsSize(item){ 
  const slug = item['name']
  detailStore.filterBySize(slug)
  filterSize.value=true
  filter.value=false
}
console.log(localColor);

onMounted(()=>{
 localColor.getcolor()

 usebook.getname()
 useimage.getImages()
})
const shop = ref(0)
console.log(shop.value);

function decrease(){
    if( usebook.count>0){
      usebook.count-=1 

    }else{ 
      usebook.count=0
    }


   }
   function increase(){
    usebook.count+=1    
  }

;

</script>





<style scoped>
@import "../assets/product.css";


</style>

