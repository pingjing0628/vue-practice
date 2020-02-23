import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home'
        }]
      }
    }, 
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'About'
        }]
      }
    }, 
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/Card.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'Card'
        }]
      }
    }, 
    {
      path: '/bread',
      name: 'bread',
      component: () => import('../views/Bread.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'Bread'
        }]
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'News'
        }]
      }
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/Filter.vue'),
      meta: {
        breadcrumb: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'Filter'
        }]
      }
    }
  ]
})
