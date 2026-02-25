<template>
  <div class="bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(59,130,246,0.12)] transition-all duration-500 hover:-translate-y-2 group flex flex-col relative border border-gray-50 overflow-hidden">
    
    <!-- Бейдж класса (Парящий поверх картинки) -->
    <div class="absolute top-4 left-4 z-10">
      <span class="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
        {{ car.class }}
      </span>
    </div>

    <!-- Изображение машины с плазующим зумом -->
    <div class="h-64 relative overflow-hidden bg-gray-100/50 p-4 flex items-center justify-center">
      <!-- Декоративный круг на фоне за машиной (опционально для стиля) -->
      <div class="absolute w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      <img :src="car.image" :alt="car.model" class="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition duration-700 drop-shadow-xl">
    </div>

    <!-- Информация -->
    <div class="p-6 pt-2 flex flex-col flex-grow bg-white relative z-20">
      <h3 class="text-2xl font-black text-gray-900 mb-2 tracking-tight">{{ car.model }}</h3>
      
      <!-- Характеристики в виде "пилюль" -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span class="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-md">⚙️ {{ car.transmission }}</span>
        <span class="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-md">⛽ {{ car.fuel }}</span>
      </div>
      
      <div class="mt-auto flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-400">Аренда</span>
          <div>
            <span class="text-2xl font-black text-blue-600">{{ car.price }}₽</span>
            <span class="text-gray-500 text-sm font-medium"> / мин</span>
          </div>
        </div>
        
        <!-- Кнопка с градиентом -->
        <button @click="$emit('book', car)" class="bg-gray-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform active:scale-90 group-hover:w-auto group-hover:px-6">
          <span class="hidden group-hover:inline font-bold mr-2 whitespace-nowrap">Выбрать</span>
          <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  car: { type: Object, required: true }
})
defineEmits(['book'])
</script>
