<template>
       
       <div class="line mt-2 "></div>

    <div v-for="(item, index) in storages" :key="index" class="d-flex flex-column gap-3">
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
            {{ storages[index].price }} <span>تومان</span>
          </div>
  
          <div class="name">
            {{ storages[index].names }}
          </div>
  
          <div class="image d-flex" v-if="storages[index].images">
            <img :src="storages[index].images" alt="" class="img rounded-2">
          </div>
  
          <div class="icon" @click="removeItem(index),removeNum(index)">
            <i class="bi bi-x-square"></i>
          </div>
        </div>
      </div>
      <div class="line mt-2 "></div>
    </div>
  </template>
  
  <script setup>
  import {  onMounted, onUnmounted, ref, watchEffect } from "vue";

  const emit = defineEmits(['prices','number'])
  const storages = ref([]);
  const number = ref([])
  

  function getStorage() {
    console.log("Fetching localStorage...");
    const storageData =localStorage.getItem("items");

    const value = storages.value = storageData ? JSON.parse(storageData) : [];
    console.log(value[1]);
    
    number.value = Array(value.length).fill(1);
    function sendData(){
      
    emit('prices',storages.value.map(item => item.price)) 
    emit('number',number.value)
  }

  
  
  watchEffect(()=>{


    sendData()
  },{deep:true})
  return value
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
  function removeNum(index){
    number.value.splice(index, 1);
  }
  function removeItem(index){ 
    console.log(storages.value);
    console.log(storages);
    storages.value.splice(index, 1);
    storages.value = [...storages.value];

    localStorage.setItem('items',JSON.stringify(storages.value))
 
  }
  </script>
  