//importing components that needs to undergo routing
import Index from './components/Index.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Contact from './components/Contact.vue'
import Privacy_policy from './components/Privacy_policy.vue'
import terms from './components/Terms.vue'
import user_interest from './components/user_module/User_interest.vue'


export default [
	{path: '/', component: Index },
	{path: '/about', component: About},
	{path: '/login', component: Login},
	{path: '/register', component: Register},
	{path: '/contact', component: Contact},
	{path: '/privacy_policy', component: Privacy_policy},
	{path: '/terms&conditions', component: terms},
	{path: '/user/interest', component: user_interest}
]
