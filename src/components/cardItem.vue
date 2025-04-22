

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
      <div class="d-flex justify-content-between w-100 ">
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
import { useDetailStore } from "../stores/useDetailStore.js";
import { onMounted, ref, watch } from "vue";
const emit = defineEmits(["update:shop"]);
const props = defineProps({
  index:Number,
  item:Object,
  image:Object,
  shop:Number

})


function increase() {
  
  let items = JSON.parse(localStorage.getItem("items")) || [];

  let objectLocal = {
    names: props.item.attributes.name,
    price: props.item.attributes.price,
    images: imageUrl.value
  };
  items.push(objectLocal);
  localStorage.setItem("items", JSON.stringify(items));
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

