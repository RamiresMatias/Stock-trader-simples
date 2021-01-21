import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuetify';
import App from './App.vue';
import router from "./router.js";
import store from "./store/store.js";
import axios from "./plugins/axios.js";

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
});

new Vue({
	store,
	router,
	axios,
	render: h => h(App),
}).$mount('#app')
