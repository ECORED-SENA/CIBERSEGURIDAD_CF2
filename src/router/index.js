import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Curso from '../views/Curso.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () =>
        import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () =>
            import(/* webpackChunkName: "tema1" */ '../views/curso/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () =>
            import(/* webpackChunkName: "tema2" */ '../views/curso/Tema2.vue'),
        },
      ],
    },
    {
      path: '/actividad/:index?',
      name: 'actividad',
      // component: () =>
      //   import(/* webpackChunkName: "actividad" */ '../views/Actividad.vue'),
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: () =>
        import(/* webpackChunkName: "glosario" */ '../views/Glosario.vue'),
    },
    {
      path: '/complementario',
      name: 'complementario',
      component: () =>
        import(/* webpackChunkName: "comple" */ '../views/Complementario.vue'),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () =>
        import(
          /* webpackChunkName: "referencias" */ '../views/Referencias.vue'
        ),
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: () =>
        import(/* webpackChunkName: "creditos" */ '../views/Creditos.vue'),
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      return { x: 0, y: 0, behavior: 'auto' }
    }
  },
})

export default router
