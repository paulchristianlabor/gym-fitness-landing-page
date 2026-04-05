import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faXmark,
  faArrowRight,
  faCheck,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import './style.css'

library.add(
  faBars,
  faXmark,
  faArrowRight,
  faCheck,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleCheck,
  faInstagram,
  faXTwitter,
  faFacebook,
)

const app = createApp(App)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
