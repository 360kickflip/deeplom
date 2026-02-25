<template>
  <div class="container mx-auto px-4 py-16">
    <div class="text-center mb-16" v-appear>
      <h1 class="text-5xl font-black text-gray-900 mb-6 tracking-tight">Тарифы <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">GoFlex</span></h1>
      <p class="text-xl text-gray-500 max-w-2xl mx-auto">
        Бензин, страховка и мойка уже включены. Выбирайте то, что подходит именно вам.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <!-- Минутный тариф (Появляется первым) -->
      <div v-appear class="bg-white rounded-[2rem] shadow-lg border border-gray-100 p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col z-10" style="transition-delay: 100ms;">
        <h3 class="text-3xl font-bold text-gray-800 mb-2">Минутный</h3>
        <p class="text-gray-500 mb-8 font-medium">Для коротких поездок.</p>
        <div class="text-5xl font-black text-gray-900 mb-8">от 9 ₽<span class="text-lg text-gray-400 font-bold"> / мин</span></div>
        <ul class="space-y-4 mb-10 flex-grow text-gray-600">
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span> Бесплатная бронь 15 мин</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span> Ожидание от 3 ₽/мин</li>
        </ul>
        <router-link to="/cars" class="w-full text-center bg-gray-100 text-gray-800 font-bold py-4 rounded-xl hover:bg-gray-200 transition">Выбрать авто</router-link>
      </div>

      <!-- Часовой тариф (Появляется вторым + Парящая анимация) -->
      <div v-appear class="bg-gradient-to-b from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl shadow-blue-500/40 p-10 relative flex flex-col text-white transform md:-translate-y-6 z-20 animate-float" style="transition-delay: 300ms;">
        <div class="absolute -top-4 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
          Выбор пользователей
        </div>
        <h3 class="text-3xl font-bold mb-2">Часовой</h3>
        <p class="text-blue-200 mb-8 font-medium">Шопинг и встречи (2 часа).</p>
        <div class="text-5xl font-black mb-8">890 ₽<span class="text-lg text-blue-300 font-bold"> / 2 ч.</span></div>
        <ul class="space-y-4 mb-10 flex-grow text-blue-50">
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">✓</span> Включено 30 км</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">✓</span> Бесплатное ожидание</li>
        </ul>
        <router-link to="/cars" class="w-full text-center bg-white text-blue-600 font-bold py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">Выбрать авто</router-link>
      </div>

      <!-- Суточный тариф (Появляется третьим) -->
      <div v-appear class="bg-white rounded-[2rem] shadow-lg border border-gray-100 p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col z-10" style="transition-delay: 500ms;">
        <h3 class="text-3xl font-bold text-gray-800 mb-2">Суточный</h3>
        <p class="text-gray-500 mb-8 font-medium">За город и на выходные.</p>
        <div class="text-5xl font-black text-gray-900 mb-8">2 400 ₽<span class="text-lg text-gray-400 font-bold"> / сут.</span></div>
        <ul class="space-y-4 mb-10 flex-grow text-gray-600">
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span> Включено 100 км</li>
          <li class="flex items-center gap-3"><span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span> Расширенная зона</li>
        </ul>
        <router-link to="/cars" class="w-full text-center bg-gray-100 text-gray-800 font-bold py-4 rounded-xl hover:bg-gray-200 transition">Выбрать авто</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Анимация "парения" (вверх-вниз) для центральной карточки */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(-24px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(-24px); }
}

/* Чтобы на мобильных устройствах не улетало слишком высоко */
@media (max-width: 768px) {
  .animate-float {
    animation: float-mobile 6s ease-in-out infinite;
  }
  @keyframes float-mobile {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
}
</style>
