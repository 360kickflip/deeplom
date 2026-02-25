<template>
  <div class="container mx-auto px-4 py-20 flex justify-center items-center min-h-[70vh]">
    <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
      
      <!-- Переключатель Вход / Регистрация -->
      <div class="flex mb-8 bg-gray-100 p-1 rounded-xl">
        <button 
          @click="isLogin = true" 
          :class="['flex-1 py-2 font-semibold rounded-lg transition', isLogin ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700']"
        >Вход</button>
        <button 
          @click="isLogin = false" 
          :class="['flex-1 py-2 font-semibold rounded-lg transition', !isLogin ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700']"
        >Регистрация</button>
      </div>

      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">
        {{ isLogin ? 'С возвращением!' : 'Создать аккаунт' }}
      </h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Поле Имя (только для регистрации) -->
        <div v-if="!isLogin">
          <label class="block text-gray-700 text-sm font-bold mb-2">Ваше Имя</label>
          <input 
            v-model="form.name" 
            type="text" 
            required
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            placeholder="Иван Иванов"
          >
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            required
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            placeholder="mail@example.com"
          >
        </div>
        
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Пароль</label>
          <input 
            v-model="form.password" 
            type="password" 
            required
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            placeholder="••••••"
          >
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100">
          {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 mt-4"
        >
          {{ isLoading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться') }}
        </button>
      </form>
      
      <p v-if="isLogin" class="text-center mt-6 text-gray-400 text-sm border-t pt-4">
        Для теста логина: test@goflex.ru / 123456
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { login, register } from '../auth.js' // Импортируем методы

const isLogin = ref(true)
const isLoading = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: 'test@goflex.ru',
  password: '123456'
})

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    if (isLogin.value) {
      await login(form.email, form.password)
    } else {
      await register(form.name, form.email, form.password)
    }
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
}
</script>
