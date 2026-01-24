import MainLayout from './Layout/MainLayout.vue';
import HomePage from './Pages/HomePage.vue';

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
    ],
  },
];

export default frontRoutes;
