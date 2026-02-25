<template>
  <div class="container mx-auto px-4 py-10">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Личный кабинет</h1>
        <!-- Вызываем функцию logout -->
        <button @click="logout" class="text-red-500 hover:text-white hover:bg-red-500 font-medium px-4 py-2 border border-red-200 rounded-lg transition">
          Выйти
        </button>
      </div>

      <!-- Проверяем наличие пользователя -->
      <div v-if="user" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Карточка профиля -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-1">
          <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 text-white text-4xl rounded-full flex items-center justify-center font-bold mb-4 mx-auto shadow-lg">
            {{ user.name.charAt(0) }}
          </div>
          <h2 class="text-xl font-bold text-center mb-1">{{ user.name }}</h2>
          <p class="text-gray-500 text-center text-sm mb-6">{{ user.email }}</p>
          
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p class="text-sm text-blue-800 mb-1">Баланс GoFlex</p>
            <p class="text-3xl font-black text-blue-900">{{ user.balance }} ₽</p>
            <button class="mt-4 w-full bg-white text-blue-600 border border-blue-200 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
              Пополнить счет
            </button>
          </div>
        </div>

        <!-- История поездок -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2 flex flex-col">
          <h3 class="text-xl font-bold mb-4 border-b pb-4">Ваши поездки</h3>
          <div class="flex-grow flex flex-col items-center justify-center py-10 text-center opacity-60">
            <div class="text-6xl mb-4">🛣️</div>
            <p class="text-gray-800 font-medium text-lg">Пока ни одной поездки</p>
            <p class="text-gray-500 mt-2 max-w-sm">Самое время взять авто и отправиться по делам с комфортом.</p>
            <router-link to="/cars" class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition">
              Перейти в автопарк
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Импортируем пользователя и функцию выхода напрямую из auth.js
import { user, logout } from '../auth.js'
</script>
