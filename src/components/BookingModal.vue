<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">
      
      <!-- Картинка авто в шапке модалки -->
      <div v-if="car" class="h-48 relative">
        <img :src="car.image" class="w-full h-full object-cover" alt="Car">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
        <!-- Кнопка закрытия -->
        <button @click="$emit('close')" class="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center transition backdrop-blur-md">
          &times;
        </button>
        <div class="absolute bottom-4 left-6 text-white">
          <span class="bg-blue-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">{{ car.class }}</span>
          <h2 class="text-3xl font-extrabold">{{ car.model }}</h2>
        </div>
      </div>

      <div v-if="car" class="p-6">
        <div class="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p class="text-gray-500 mb-1">Топливо</p>
            <p class="font-bold text-gray-800 flex items-center gap-2">⛽ {{ car.fuel }}</p>
          </div>
          <div>
            <p class="text-gray-500 mb-1">Коробка</p>
            <p class="font-bold text-gray-800 flex items-center gap-2">⚙️ {{ car.transmission }}</p>
          </div>
          <div class="col-span-2 pt-4 mt-2 border-t border-gray-200 flex justify-between items-center">
            <span class="text-gray-500">Стоимость аренды</span>
            <span class="text-2xl font-black text-blue-600">{{ car.price }} ₽<span class="text-sm font-medium text-gray-400">/мин</span></span>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="$emit('close')" class="w-1/3 px-4 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition">
            Отмена
          </button>
          <button @click="$emit('confirm')" class="w-2/3 px-4 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex justify-center items-center gap-2">
            <span>🔑</span> Забронировать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  car: Object
})
defineEmits(['close', 'confirm'])
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
