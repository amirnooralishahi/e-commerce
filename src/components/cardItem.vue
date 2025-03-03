<template>
  <div  >
  <div class="image" ref="localImage">
    <img :src="imageUrl" 
     class="img img-fluid" />

  </div>
  <div class="sticker mt-2 d-flex justify-content-end">
    <div
      class="text d-flex flex-column gap-1 name w-100 align-items-end"
    >
      <div class="d-flex justify-content-between w-100 border">
        <i class="bi bi-heart heart"></i>
        <h3 class="fs-5 overflow-hidden text-start" ref="localName">
          {{ props.item['attributes']['name']}}
        </h3>
      </div>

      <p class="">قابل چاپ با اندازه دلخواه</p>
    </div>
  </div>
  <div class="price d-flex gap-2 p-3" ref="localPrice">
    <span class="fw-bold">{{ props.item['attributes']['price'] }}</span>
  </div>
  <div @click="increase" class="add ">
    <div class="text">
      <span>
      افزودن به گالری 

      </span>
      <i class="bi bi-image"></i>
   
    </div>

  </div>
  </div>
</template>

<script setup>
import { useDetailStore } from "../stores/counter.js";
// import { computed } from "vue";

import { onMounted, ref, toRaw, useTemplateRef, watch, watchEffect } from "vue";
const emit = defineEmits(["update:shop"]);
const props = defineProps({
  index:Number,
  item:Object,
  image:Object,
  shop:Number

})

function increase() {
  let names = JSON.parse(localStorage.getItem("names")) || [];
  let prices = JSON.parse(localStorage.getItem("prices")) || [];
  let images = JSON.parse(localStorage.getItem("images")) || [];

  names.push(props.item.attributes.name);
  prices.push(props.item.attributes.price);
  images.push(imageUrl.value);

  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("prices", JSON.stringify(prices));
  localStorage.setItem("images", JSON.stringify(images));


}

const imageUrl = ref("");
onMounted(() => {
  if (props.image && props.image.length > 0) {
    updateImage();
  }
});

watch(() => props.image, (newValue) => {
  if (newValue && newValue.length > 0) {
    updateImage();
  }
}, { deep: true });

function updateImage() {
  imageUrl.value = props.image[props.index]?.attributes?.styles?.[5]?.url ;
 
  
}

onMounted(() => {
  loadData()
  usebook.getname()
  

})
const loadData = async ()=>{
  await usebook.getname()
} 
const usebook = useDetailStore();





</script>

<style scoped>
.add {
  border: 1px solid darkred !important;
  color: darkred; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  margin: 0 5px 10px 5px ;
}

.add:hover {
  cursor: pointer;
}

@import "../assets/product.css";
</style>
