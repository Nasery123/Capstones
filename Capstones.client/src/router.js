import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component:loadPage ('Dashboard'),
    beforeEnter: authGuard
  },
  {
    path:'/tutor/:tutorId',
    name: 'Tutor',
    component:loadPage('ActiveTutor'),
    beforeEnter:authGuard
  },
  {
    // path:'/account/messages',
    path: '/channel',
    name: 'HubPage',
    component: loadPage('MessageHubPage'),
    beforeEnter:authGuard
  },
  {
    path: '/channel/:id',
    name: 'Channel',
    component: loadPage('ChannelPage'),
    beforeEnter:authGuard
  },
    {
    path: "/channel/@me/:id",
    name: "Friend",
    component: loadPage("FriendPage"),
  },

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
