import MainLayout from './Layout/MainLayout.vue'
import HomePage from './Pages/HomePage.vue'
import MenuPage from './Pages/MenuPage.vue'
import AboutPage from './Pages/AboutPage.vue'
import ReservationPage from './Pages/ReservationPage.vue'
import CheckoutPage from './Pages/CheckoutPage.vue'
import SuccessPage from './Pages/SuccessPage.vue'
import ContactPage from './Pages/ContactPage.vue'

const frontRoutes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'menu',
        name: 'menu',
        component: MenuPage,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutPage,
      },
      {
        path: 'reservation',
        name: 'reservation',
        component: ReservationPage,
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: CheckoutPage,
      },
      {
        path: 'success',
        name: 'success',
        component: SuccessPage,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactPage,
      },
    ],
  },
]

export default frontRoutes
