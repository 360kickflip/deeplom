import { ref, computed } from 'vue'
import router from './router'

// 1. Глобальное реактивное состояние
export const user = ref(JSON.parse(localStorage.getItem('goflex_user')) || null)
export const token = ref(localStorage.getItem('goflex_token') || null)

// 2. Вычисляемое свойство статуса
export const isAuthenticated = computed(() => !!token.value)

// 3. Функция Входа
export const login = async (email, password) => {
  // Имитация запроса к серверу (замените на axios)
  await new Promise(resolve => setTimeout(resolve, 800))
  
  if (email === 'test@goflex.ru' && password === '123456') {
    const mockToken = 'jwt_token_example_123'
    const mockUser = { id: 1, name: 'Иван Иванов', email, balance: 1500 }
    
    setSession(mockToken, mockUser)
  } else {
    throw new Error('Неверный email или пароль')
  }
}

// 4. Функция Регистрации
export const register = async (name, email, password) => {
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // Имитация успешной регистрации и автоматического входа
  const mockToken = 'jwt_new_user_token_777'
  const mockUser = { id: 2, name, email, balance: 0 } // Новому юзеру даем 0 рублей
  
  setSession(mockToken, mockUser)
}

// 5. Функция Выхода
export const logout = () => {
  user.value = null
  token.value = null
  localStorage.removeItem('goflex_token')
  localStorage.removeItem('goflex_user')
  router.push('/auth')
}

// Вспомогательная функция для сохранения сессии
function setSession(newToken, newUser) {
  token.value = newToken
  user.value = newUser
  localStorage.setItem('goflex_token', newToken)
  localStorage.setItem('goflex_user', JSON.stringify(newUser))
  router.push('/profile')
}
