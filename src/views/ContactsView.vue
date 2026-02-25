<template>
  <div class="container mx-auto px-4 py-10">
    <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
      
      <!-- Левая часть: Информация -->
      <div class="bg-blue-600 p-10 md:w-2/5 text-white flex flex-col justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
          <p class="text-blue-100 mb-8">
            Остались вопросы? Мы на связи 24/7. Напишите нам, и наша команда поддержки ответит вам в кратчайшие сроки.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="text-2xl">📍</div>
              <div>
                <h4 class="font-bold">Главный офис</h4>
                <p class="text-blue-200">г. Санкт-Петербург, ул. Руставели, д. 33</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-2xl">📞</div>
              <div>
                <h4 class="font-bold">Телефон</h4>
                <p class="text-blue-200">8 (800) 555-35-35</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="text-2xl">✉️</div>
              <div>
                <h4 class="font-bold">Email</h4>
                <p class="text-blue-200">support@goflex.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Правая часть: Форма -->
      <div class="p-10 md:w-3/5">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Написать сообщение</h3>
        
        <form @submit.prevent="sendMessage" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Ваше имя</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" placeholder="Иван">
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input v-model="form.email" type="email" required class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" placeholder="mail@example.com">
            </div>
          </div>
          
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Тема обращения</label>
            <select v-model="form.subject" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white">
              <option value="Вопрос по аренде">Вопрос по аренде</option>
              <option value="Проблема с аккаунтом">Проблема с аккаунтом</option>
              <option value="Сотрудничество">Сотрудничество</option>
              <option value="Другое">Другое</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Сообщение</label>
            <textarea v-model="form.message" required rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none" placeholder="Опишите ваш вопрос..."></textarea>
          </div>

          <button type="submit" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200 w-full md:w-auto">
            Отправить сообщение
          </button>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'Вопрос по аренде',
  message: ''
})

const sendMessage = () => {
  alert(`Спасибо, ${form.name}! Ваше сообщение отправлено. Мы ответим на ${form.email} в ближайшее время.`)
  // Очистка формы
  form.name = ''
  form.email = ''
  form.message = ''
  form.subject = 'Вопрос по аренде'
}
</script>