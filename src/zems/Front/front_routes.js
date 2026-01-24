import MainLayout from './Layout/MainLayout.vue';
import HomePage from './Pages/HomePage.vue';
import MenuPage from './Pages/MenuPage.vue';

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
    ],
  },
];

export default frontRoutes;
