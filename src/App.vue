<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
    
    <!-- Навигация (Шапка - Glassmorphism) -->
    <header class="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <!-- НОВЫЙ ЛОГОТИП -->
        <router-link to="/" class="flex items-center gap-3 hover:opacity-90 transition group">
          
          <!-- Векторная иконка логотипа -->
          <svg class="w-11 h-11 transform group-hover:scale-105 transition duration-300 shadow-sm rounded-2xl" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Градиентный фон иконки -->
            <rect width="48" height="48" rx="14" fill="url(#logo_gradient)"/>
            <!-- Силуэт автомобиля -->
            <path d="M12 28C12 28 15 20 22 20C29 20 32 23 34 25C34 25 36 28 36 30C36 31 34 32 34 32H12C12 32 10 32 10 30C10 28 12 28 12 28Z" fill="white"/>
            <!-- Колеса -->
            <circle cx="16" cy="32" r="4" fill="#1E3A8A"/>
            <circle cx="30" cy="32" r="4" fill="#1E3A8A"/>
            <!-- Окно / Блик -->
            <path d="M22 20L17 28H14L19 20H22Z" fill="#93C5FD"/>
            <!-- Определение градиента -->
            <defs>
              <linearGradient id="logo_gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3B82F6"/>
                <stop offset="1" stop-color="#4F46E5"/>
              </linearGradient>
            </defs>
          </svg>

          <!-- Текст логотипа с градиентом -->
          <span class="text-3xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            GoFlex
          </span>
        </router-link>
        
        <!-- Основное Меню -->
        <div class="flex items-center gap-6">
          <nav class="hidden md:flex space-x-8 font-semibold text-gray-600">
            <router-link to="/" class="hover:text-blue-600 transition" active-class="text-blue-600">Главная</router-link>
            <router-link to="/cars" class="hover:text-blue-600 transition" active-class="text-blue-600">Автопарк</router-link>
            <router-link to="/tariffs" class="hover:text-blue-600 transition" active-class="text-blue-600">Тарифы</router-link>
            <router-link to="/contacts" class="hover:text-blue-600 transition" active-class="text-blue-600">Контакты</router-link>
          </nav>
          
          <!-- Зона авторизации -->
          <div class="pl-6 md:border-l border-gray-200 flex items-center">
            <router-link v-if="!isAuthenticated" to="/auth" class="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition active:scale-95">
              Войти
            </router-link>
            <router-link v-else to="/profile" class="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-2 py-1.5 pr-4 rounded-full transition cursor-pointer group">
              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition">
                {{ user?.name ? user.name.charAt(0).toUpperCase() : '?' }}
              </div>
              <span class="hidden sm:inline font-bold text-gray-700">
                {{ user?.name || 'Загрузка...' }}
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Основной контент (Здесь рендерятся страницы из Vue Router) -->
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Подвал (Footer) -->
    <footer class="bg-gray-900 text-gray-400 py-12 mt-auto border-t-4 border-blue-600">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <!-- Блок с логотипом в подвале -->
        <div>
          <div class="mb-5 flex items-center justify-center md:justify-start gap-3 opacity-90 hover:opacity-100 transition">
            <!-- Копия логотипа для темного подвала -->
            <svg class="w-9 h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="14" fill="url(#footer_logo_gradient)"/>
              <path d="M12 28C12 28 15 20 22 20C29 20 32 23 34 25C34 25 36 28 36 30C36 31 34 32 34 32H12C12 32 10 32 10 30C10 28 12 28 12 28Z" fill="white"/>
              <circle cx="16" cy="32" r="4" fill="#1E3A8A"/>
              <circle cx="30" cy="32" r="4" fill="#1E3A8A"/>
              <path d="M22 20L17 28H14L19 20H22Z" fill="#93C5FD"/>
              <defs>
                <linearGradient id="footer_logo_gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#3B82F6"/>
                  <stop offset="1" stop-color="#4F46E5"/>
                </linearGradient>
              </defs>
            </svg>
            <span class="text-white font-black text-2xl tracking-widest">GoFlex</span>
          </div>
          <p class="text-sm text-gray-400">Твой надежный каршеринг. Свобода передвижения по городу без лишних забот и переплат.</p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5">Навигация</h4>
          <ul class="space-y-3">
            <li><router-link to="/" class="hover:text-blue-400 transition">Главная</router-link></li>
            <li><router-link to="/cars" class="hover:text-blue-400 transition">Автопарк</router-link></li>
            <li><router-link to="/tariffs" class="hover:text-blue-400 transition">Тарифы</router-link></li>
            <li><router-link to="/contacts" class="hover:text-blue-400 transition">Контакты</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-5">Контакты</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center justify-center md:justify-start gap-2"><span class="text-blue-500 text-lg">📞</span> 8 (800) 555-35-35</li>
            <li class="flex items-center justify-center md:justify-start gap-2"><span class="text-blue-500 text-lg">✉️</span> support@goflex.ru</li>
            <li class="flex items-start justify-center md:justify-start gap-2"><span class="text-blue-500 text-lg">📍</span> <span>г. Санкт-Петербург, ул. Руставели,<br>д. 33</span></li>
          </ul>
        </div>
        
      </div>
      
      <div class="container mx-auto px-4 mt-10 pt-6 border-t border-gray-800/50 text-center text-sm text-gray-500">
        &copy; 2026 GoFlex Каршеринг. Все права защищены.
      </div>
    </footer>
  </div>
</template>

<script setup>
// Импортируем реактивные переменные из нашего файла auth.js
import { user, isAuthenticated } from './auth.js'
</script>

<style>
/* Анимация смены страниц */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
