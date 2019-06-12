import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios'
import Vuelidate from 'vuelidate'

import App from './App.vue';
import router from './routes';
import store from './store/store'

Vue.use(VueResource);
Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vuejs-training-16540.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)


Vue.http.options.root = 'https://vuejs-training-16540.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
