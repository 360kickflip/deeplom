<template>
  <div class="container mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row justify-between items-md-center mb-8 gap-4">
      <h1 class="text-3xl font-bold text-gray-800">Автопарк GoFlex</h1>
      
      <!-- Поиск -->
      <div class="relative w-full md:w-72">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск по модели..." 
          class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        >
        <span class="absolute right-3 top-2.5 text-gray-400">🔍</span>
      </div>
    </div>

    <!-- Фильтры по классу -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition',
          selectedCategory === category 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
        ]"
      >
        {{ category }}
      </button>
    </div>
    
    <!-- Список авто -->
    <div v-if="filteredCars.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <CarCard 
        v-for="car in filteredCars" 
        :key="car.id" 
        :car="car"
        @book="openModal" 
      />
    </div>
    
    <!-- Заглушка, если ничего не найдено -->
    <div v-else class="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
      <div class="text-5xl mb-4">🤷‍♂️</div>
      <h3 class="text-xl font-bold text-gray-700 mb-2">Автомобили не найдены</h3>
      <p class="text-gray-500">Попробуйте изменить параметры поиска или фильтр.</p>
      <button @click="resetFilters" class="mt-4 text-blue-600 font-medium hover:underline">Сбросить фильтры</button>
    </div>

    <!-- Компонент модального окна -->
    <BookingModal 
      :is-open="isModalVisible" 
      :car="selectedCar" 
      @close="closeModal" 
      @confirm="handleConfirmBooking" 
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CarCard from '../components/CarCard.vue'
import BookingModal from '../components/BookingModal.vue'

// Данные
const cars = ref([
  { id: 1, model: 'Volkswagen Polo', class: 'Эконом', price: 9, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80' },
  { id: 2, model: 'Kia Rio', class: 'Эконом', price: 10, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80' },
  { id: 3, model: 'Nissan Qashqai', class: 'Комфорт', price: 14, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80' },
  { id: 4, model: 'Toyota RAV4', class: 'Комфорт', price: 16, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1550427741-6161a0b9ce4d?auto=format&fit=crop&w=800&q=80' },
  { id: 5, model: 'BMW 3 Series', class: 'Бизнес', price: 22, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1555353540-64fd1b6227c0?auto=format&fit=crop&w=800&q=80' },
  { id: 6, model: 'Mercedes C-Class', class: 'Бизнес', price: 24, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' },
  { id: 7, model: 'Porsche Macan', class: 'Премиум', price: 35, transmission: 'Автомат', fuel: 'Бензин', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { id: 8, model: 'Tesla Model 3', class: 'Электро', price: 28, transmission: 'Автомат', fuel: 'Электро', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80' },
])

// Состояние фильтров
const searchQuery = ref('')
const selectedCategory = ref('Все')
const categories = ['Все', 'Эконом', 'Комфорт', 'Бизнес', 'Премиум']

// Вычисляемое свойство для фильтрации
const filteredCars = computed(() => {
  return cars.value.filter(car => {
    const matchesSearch = car.model.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'Все' || car.class === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'Все'
}

// Состояние модального окна
const isModalVisible = ref(false)
const selectedCar = ref(null)

const openModal = (car) => {
  selectedCar.value = car
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
  setTimeout(() => { selectedCar.value = null }, 300) // ждем окончания анимации
}

const handleConfirmBooking = () => {
  alert(`Успешно! Автомобиль ${selectedCar.value.model} забронирован. У вас есть 15 бесплатных минут, чтобы дойти до авто.`)
  closeModal()
}
</script>
