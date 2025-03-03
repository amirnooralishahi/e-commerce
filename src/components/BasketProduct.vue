<template>
  
  <div class="header ">
    <div class="header-contain p-3 d-flex w-100 justify-content-around">
      <div class="left d-flex gap-3">
        <div
          class="left-shop d-flex gap-3 align-items-center justify-content-center"
        >
          <span>سبد خرید</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
        </div>
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
      <div class="center">
        <div class="search d-flex border  rounded-4 align-items-center">
          <div class="search-icon p-2">
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
  <div class="category w-100 mt-5 d-flex flex-column align-items-center ">
    <div class="category-head d-flex w-75  ">
      <p>جشن و مهمانی</p>
      <p>کارت و پوستر</p>
      <p>مدرسه و اداره</p>

      <p>اکسسوری</p>
      <p>قاب موبایل</p>

      <p>لوازم خانه</p>

      <p>پوشاک</p>
    </div>
  </div>
  <div class="steps d-flex justify-content-center mt-3 fs-5">
    <div class="pay d-flex flex-column align-items-center color">
        <div class="icon">
        <i class="bi bi-cash"></i>
        </div>
        <span class="text">
            پرداخت
        </span>

    </div>
    
    <div class="line d-flex color">
        <i class="bi bi-circle-fill"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-circle-fill"></i>
    </div>
    <div class="location d-flex flex-column align-items-center color">
        <div class="icon">
            <i class="bi bi-geo-alt"></i>
        </div>
        <div class="text">
            اطلاعات آدرس
        </div>
       
    </div>
    <div class="line color">
        <i class="bi bi-circle-fill"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-dash"></i>
        <i class="bi bi-circle-fill"></i>

    </div>
    <div class="basket d-flex flex-column align-items-center">
        <div class="icon">
            <i class="bi bi-cart"></i>
        </div>
        <div class="text">سبد خرید </div>
        
    </div>
</div>
<div class="invoice my-2 ">
  <div class="invoice-container  d-flex justify-content-center p-5   row ">
    <div class="right col-4 d-flex flex-column gap-4">
        
        <div class="allpay d-flex ">
            <div class="allpay-container d-flex flex-column border  rounded-5 p-4">
                <div class="up d-flex flex-column gap-3">
                    <div class="text d-flex flex-column  align-items-end gap-3">
                        <span>کد تخفیف</span>
                  
                        <span class="text-end">کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن اعتبارر به سفارش شما اعمال شود </span>
                        
                    </div>
                    <div class="sub d-flex gap-3 justify-content-end">
                            <input class="submit  py-2 bg-transparent rounded-3" type="submit" value="ثبت">
                            <input type="text" class="text px-5 rounded-3">
                        </div>
                </div>
                <div class="line w-100  mt-3"> </div>
                <div class="center d-flex  ">
            
                  <div class="discount w-100  ">
                    <div class="all d-flex justify-content-between ">
                   
                   <div class="pay d-flex flex-column ">
                
                     <span v-for="(item, index) in prices" :key="index">
                      {{ item }}
                      <span>
                      تومان
                     </span> 
                     </span>
                     
                     </div>
                     <div class="text d-flex flex-column  align-items-end gap-2">
                     <span>قیمت کالا ها </span>
              
                     <span class="number">تعداد کالا </span>
                     <span>{{ sum }}</span>
                   </div>
                   </div>
                    <div class="discount-all d-flex justify-content-between mt-2">
                      
                    
                      <div class="pay  d-flex gap-2">

                        <span>20.000</span>
                        <span>تومان</span>

                      </div>
                      <div class="text d-flex align-items-center justify-content-center  gap-2">
                        <span>مجموع تخفیف روی کالاها </span>
                        <i class="bi bi-bookmark-dash-fill"></i>

                      </div>
                    </div>
                      <div class="profit d-flex justify-content-between mt-2">
                      
                        <div class="pay">
                          <span>30.000</span>
                          <span>تومان</span>

                        </div>
                        <div class="text">
                          <span>سود شما از خرید</span>
                        </div>
                      </div>
                      <div class="delivery d-flex justify-content-between mt-2">
                        
                        <div class="pay">
                          <span>50.000</span>
                          <span>تومان</span>

                        </div>
                        <div class="text">
                          <span>هزینه ارسال </span>
                        </div>
                      </div>
                  </div>
                 
                </div>
                <div class="line w-100  mt-3">
                  
                </div>
                  <div class="subProduct d-flex flex-column  w-100">
                    
                      <div class="pay w-100 d-flex justify-content-between mt-2">
                        <div>
                        <span>{{ totalPrice }}</span>
                        <span>تومان</span>

                        </div>
                  
                      <div class="text">
                        <span>جمع مبلغ قابل پرداخت</span>
                      </div>

                    </div>
             
                    
                    <div class="order mt-3 rounded-2  text-white gap-3 d-flex w-100 p-2 align-items-center  justify-content-center">
                    <div class="icon d-flex  align-items-center">
                      <i class="bi bi-arrow-left mt-2"></i>
                    </div>
                    <div class="text ">
                    <span>ثبت سفارش </span>

                    </div>
                    </div>
                  </div>
              




            </div>
        </div>
        <div class="danger">
          <div class="danger-container border rounded-3 d-flex flex-column gap-3 p-3">
            <div class="icon d-flex justify-content-end">
              <i class="bi bi-info-circle-fill "></i>
            </div>
            <div class="text d-flex justify-content-end">
            <span>ارسال رایگان برای سفارش های بالای 700.000 تومن</span>
            <i class="bi bi-dot"></i>

            </div>
            <div class="text d-flex justify-content-end">

            <span>در صورت اتمام موجودی، کالاها از سبد خرید حذف میشوند. </span>
            <i class="bi bi-dot"></i>

            </div>
            <div class="text d-flex justify-content-end">
            <span>لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید. </span>
            <i class="bi bi-dot"></i>

          </div>
          </div>
        </div>

      </div>
      <div class="left  col-8 p-5 ">
        <div class="text d-flex justify-content-end ">
          <span>سبد خرید </span>

        </div>
      <getItem @prices="receiveData" @number="receiveNumber"  />

      </div>
  </div>
   

</div>
<div>
  <div class="footer_up  w-100 d-flex justify-content-center mt-5">
    <div class="footer_up-contain d-flex w-100 px-5">
      <div class="left w-50 d-flex flex-column p-5">
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
</div>
  
</template>

<script setup>
import getItem from './getItem.vue'
import {computed, onMounted, ref, watch, watchEffect} from 'vue'
const prices=ref([])
const number=ref([])

function receiveData(price){
  prices.value =price
  console.log(typeof prices.value);
  
};


function receiveNumber(num) {
  number.value = num; 
  console.log(number.value);
};
const sum = computed(()=>{
  return number.value.reduce((acc,curr)=>acc  + curr,0)
});
const totalPrice = computed(() => {
    // اطمینان از اینکه prices.value یک آرایه است
    if (!Array.isArray(prices.value)) {
        console.error("prices.value is not an array:", prices.value);
        return 0;
    }
    
    // محاسبه مجموع قیمت‌ها
    return prices.value.reduce((acc, curr) => {
        // تبدیل مقدار فعلی به عدد
        const price = parseFloat(curr);
        // اگر تبدیل به عدد ناموفق بود، از 0 استفاده کنید
        return acc + (isNaN(price) ? 0 : price);
    }, 0);
});





onMounted(()=>{
  receiveData();
 
  
})

</script>

<style>
@import "../assets/getStyle.css";
</style>