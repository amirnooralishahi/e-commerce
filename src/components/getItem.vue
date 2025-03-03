<template>
       
       <div class="line mt-2 "></div>

    <div v-for="(item, index) in image" :key="index" class="d-flex flex-column gap-3">
      <div class="buy d-flex w-100  align-items-center">
        <div class="left w-25 p-2">
          <div class="d-flex gap-3 align-items-center">
            <div class="min" @click="decrease(index),sendData()"><i class="bi bi-dash"></i></div>
            <div class="num mb-1">{{ number[index] }}</div>
            <div class="max" @click="increase(index),sendData()"><i class="bi bi-plus-lg"></i></div>
          </div>
        </div>
  
        <div class="right d-flex align-items-center justify-content-end gap-4 p-2 w-75">
          <div class="price">
            {{ prices[index] }} <span>تومان</span>
          </div>
  
          <div class="name">
            {{ names[index] }}
          </div>
  
          <div class="image d-flex" v-if="image[index]">
            <img :src="image[index]" alt="" class="img rounded-2">
          </div>
  
          <div class="icon">
            <i class="bi bi-x-square"></i>
          </div>
        </div>
      </div>
      <div class="line mt-2 "></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref, watchEffect } from "vue";
  const emit = defineEmits(['prices','number'])
  const image = ref([]);
  const names = ref([]);
  const prices = ref([]);
  const number = ref([]);
  
  function sendData(){
    emit('prices',prices.value)
    emit('number',number.value)
 

  }
  function getStorage() {
    console.log("Fetching localStorage...");
  
    const imagesData = localStorage.getItem("images");
    const namesData = localStorage.getItem("names");
    const pricesData = localStorage.getItem("prices");

  watchEffect(()=>{
    sendData()
  })
    image.value = imagesData ? JSON.parse(imagesData) : [];
    names.value = namesData ? JSON.parse(namesData) : [];
    prices.value = pricesData ? JSON.parse(pricesData) : [];
    if (image.value.length !== names.value.length || image.value.length !== prices.value.length) {
      console.error("Error: Data mismatch in localStorage!");
    }
  
    number.value = Array(image.value.length).fill(1);
  }
  
  onMounted(() => {
    getStorage();
    decrease()
    increase()

    
    window.addEventListener("storage", getStorage);
  });
  
  onUnmounted(() => {
    window.removeEventListener("storage", getStorage);
  });
  
  function decrease(index) {
    if (number.value[index] > 0) {
      number.value[index] -= 1;
    } else {
      number.value[index] = 0;
    }
  }
  
  function increase(index) {

    number.value[index] += 1;
  }
  </script>
  