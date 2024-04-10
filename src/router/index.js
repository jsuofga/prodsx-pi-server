// Composables
import { useStateStore} from '@/stores/StateStore'
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/videoinputs',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/videoinputs',
        name: 'VideoInputs',
        component: () => import(/* webpackChunkName: "home" */ '@/views/VideoInputs.vue'),
      },
    ],
  },

  {
    path: '/update',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/update',
        name: 'Update',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Update.vue'),
        beforeEnter: (to, from, next) => {
        
          let  StateStore = useStateStore(); // <-- passing Pinia instance directly
          StateStore.pageToAuthenticateAndRoute = 'update'

          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            StateStore.isAuthenticated = !StateStore.isAuthenticated
            next();

          }
        }
      },
    ],
  },
  {
    path: '/accesscontrol',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/accesscontrol',
        name: 'AccessControl',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AccessControl.vue'),
      },
    ],
  },
  {
    path: '/devicelist',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/devicelist',
        name: 'DeviceList',
        component: () => import(/* webpackChunkName: "home" */ '@/views/DeviceList.vue'),
      },
    ],
  },

  {
    path: '/addzones',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/addzones',
        name: 'AddZones',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddZones.vue'),
        beforeEnter: (to, from, next) => {
          let  StateStore = useStateStore(); // <-- passing Pinia instance directly

            StateStore.pageToAuthenticateAndRoute = 'addzones'

          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            StateStore.isAuthenticated = !StateStore.isAuthenticated
            next();
           
          }
        }
      },

    ],
  },
  {
    path: '/addvideowalls',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/addvideowalls',
        name: 'AddVideoWalls',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddVideoWalls.vue'),
        beforeEnter: (to, from, next) => {
          let  StateStore = useStateStore(); // <-- passing Pinia instance directly

          StateStore.pageToAuthenticateAndRoute = 'addvideowalls'

          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            StateStore.isAuthenticated = !StateStore.isAuthenticated
            next();
           
          }
        }
      },

    ],
  },
  {
    path: '/rxlistonly',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/rxlistonly',
        name: 'RxListOnly',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RxListOnly.vue'),
      },
    ],
  },
 
  {
    path: '/zoneview',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/zoneview',
        name: 'ZoneView',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ZoneView.vue'),
      },
    ],
  },
  {
    path: '/videowallview',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/videowallview',
        name: 'VideowallView',
        component: () => import(/* webpackChunkName: "home" */ '@/views/VideowallView.vue'),
      },
    ],
  },
  {
    path: '/additach',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/additach',
        name: 'AddItach',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddItach.vue'),
      },
    ],
  },
  {
    path: '/remotecontrol',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/remotecontrol',
        name: 'RemoteControl',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RemoteControlView.vue'),
      },
    ],
  },
  {
    path: '/addchannelfavorites',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/addchannelfavorites',
        name: 'AddChannelFavorites',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddChannelFavorites.vue'),
      },
    ],
  },
  
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),

  routes,
})

export default router
