<template>
  <div class="overflow-hidden">
    <!-- Hero секция -->
    <section class="relative bg-gray-900 text-white min-h-[90vh] flex items-center justify-center">
      <!-- Фоновое изображение -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80" class="w-full h-full object-cover opacity-50 transform scale-105 animate-slow-zoom" alt="Автомобиль">
        <!-- Многослойный градиент для глубины -->
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl animate-fade-in-up">
          <div class="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 backdrop-blur-md px-5 py-2 rounded-full text-blue-300 font-bold text-sm mb-8 shadow-lg shadow-blue-500/20">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            №1 Каршеринг в России
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            Свобода <br>движения с <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              GoFlex
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Премиальные и комфортные авто за пару кликов. Без залогов, бумаг и лишних вопросов.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-5">
            <router-link to="/cars" class="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-bold overflow-hidden shadow-xl shadow-blue-600/40 transition-all hover:-translate-y-1 text-center">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span class="relative flex items-center justify-center gap-2">Посмотреть автопарк <span class="group-hover:translate-x-1 transition-transform">→</span></span>
            </router-link>
            
            <router-link to="/tariffs" class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-lg font-bold hover:bg-white/20 transition-all hover:-translate-y-1 text-center">
              Узнать тарифы
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция преимуществ с декоративным фоном -->
    <section class="relative container mx-auto px-4 py-32">
      <!-- Декоративные свечения на фоне (Ambient Light) -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] -z-10"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] -z-10"></div>

      <div class="text-center mb-20 relative z-10">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Почему мы лучше?</h2>
        <p class="text-gray-500 text-xl max-w-2xl mx-auto">Мы переосмыслили процесс аренды автомобиля, чтобы сделать его максимально незаметным для вас.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <!-- Карточка 1 -->
        <div class="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 mb-8 transform group-hover:rotate-6 transition-transform">📱</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Всё в смартфоне</h3>
          <p class="text-gray-500 leading-relaxed">Регистрация, открытие дверей, прогрев двигателя и завершение аренды — всё в одном удобном приложении на iOS и Android.</p>
        </div>

        <!-- Карточка 2 -->
        <div class="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 mb-8 transform group-hover:-rotate-6 transition-transform">⛽</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">Бензин и мойка</h3>
          <p class="text-gray-500 leading-relaxed">Забудьте о расходах на обслуживание. Если бензин на исходе — просто заправьтесь по нашей топливной карте в бардачке.</p>
        </div>

        <!-- Карточка 3 -->
        <div class="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 mb-8 transform group-hover:rotate-6 transition-transform">🛡️</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-900">КАСКО включено</h3>
          <p class="text-gray-500 leading-relaxed">Вы надежно застрахованы. В случае непредвиденных обстоятельств на дороге, ваша финансовая ответственность сведена к минимуму.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Кастомные анимации для главной страницы */
.animate-slow-zoom {
  animation: slowZoom 20s ease-in-out infinite alternate;
}
@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
</style>
