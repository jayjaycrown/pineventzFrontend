// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueLazyLoad from 'vue-lazyload'
import Lightbox from 'vue-easy-lightbox'
import {faCoffee, faEnvelopeSquare,faPhoneSquare, faSmile ,faUserSecret, faCommentAlt , faQuestionCircle,
faGraduationCap, faMapMarkerAlt, faEye, faNewspaper, faUserCircle,
faBuilding, faAnchor, faBookOpen, faStar, faLink, faLaptop, faStarAndCrescent, faBalanceScale, faLock, 
faComments, faClock, faEdit, faGift,
faUniversalAccess, faArrowAltCircleDown, faArrowCircleDown, faLandmark, faHandshake, faCreditCard, faHome, faBell, faBook,
faThumbsUp, faThumbsDown, faChartLine, faPaperPlane,
faRedoAlt, faSearch, faFileUpload, faTimes, faFemale,
faChevronRight, faBicycle, faFutbol, faBirthdayCake,
faUsers, faKeyboard, faSyncAlt, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles


/**
 * important components
 */

import VueRouter from 'vue-router'
import Routes from './routes'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueLazyLoad);
Vue.use(Lightbox);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Croppa)
Vue.use(Vuesax);

/**
 * initializing the use of the imported font awesome component
 */
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add([faCoffee, faEnvelopeSquare,faPhoneSquare, 
faUserSecret, faCommentAlt, faQuestionCircle, faSmile, faGraduationCap,
faMapMarkerAlt, faEye, faNewspaper, faUserCircle, faBuilding, faAnchor, faBookOpen, faHandshake,
faStar, faLink,faLaptop, faStarAndCrescent, faThumbsUp, faThumbsDown, faBalanceScale, faLock, faCreditCard, faComments, faClock, 
faChartLine, faPaperPlane, faEdit, faGift, faUniversalAccess, faArrowAltCircleDown, faArrowCircleDown, faLandmark,
faHome, faBell, faBook, faMapMarkerAlt, faEye, faNewspaper, faUserCircle, faBuilding, faAnchor, faBookOpen,
faStar, faLink, faStarAndCrescent, faThumbsUp, faThumbsDown, faChartLine, faPaperPlane,
faEdit, faGift, faUniversalAccess, faArrowAltCircleDown, faArrowCircleDown, faLandmark,
faHome, faBell, faBook, faRedoAlt, faSearch, faFileUpload, faTimes, faFemale,
faBicycle, faFutbol, faBirthdayCake, faUsers,
faKeyboard, faSyncAlt, faPaperPlane, faBars]);


const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
