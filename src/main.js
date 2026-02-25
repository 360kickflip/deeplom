import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// СОЗДАЕМ ДИРЕКТИВУ v-appear
app.directive('appear', {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Когда элемент появляется на экране, убираем прозрачность и сдвиг
          el.classList.remove('opacity-0', 'translate-y-10');
          el.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(el); // Анимируем только один раз
        }
      })
    }, { threshold: 0.1 }); // Срабатывает, когда видно 10% элемента

    observer.observe(el);
  }
})

app.use(router)
app.mount('#app')
