<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="unreadNotifications.length" />

    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

      <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{ unreadNotifications.length }} Nuevas</h3>
        <p class="opacity-75">Notificaciones</p>
      </div>

      <component :is="scrollbarTag" ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings" :key="$vs.rtl">
        <ul class="bordered-items">
          <li v-for="ntf in unreadNotifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer">
            <div class="flex items-start">
              <feather-icon :icon="ntf.icon" :svgClasses="[`text-${ntf.category}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
              <div class="mx-2">
                <span class="font-medium block notification-title" :class="[`text-${ntf.category}`]">{{ ntf.title }}</span>
                <small>{{ ntf.msg }}</small>
              </div>
            </div>
            <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.time) }}</small>
          </li>
        </ul>
      </component>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {
      unreadNotifications: [
        {
          index    : 0,
          title    : 'Nuevo Mensaje de Allan M.',
          msg      : 'Estas listo para la presentación.',
          icon     : 'MessageSquareIcon',
          time     : this.randomDate({sec: 10}),
          category : 'primary'
        },
        { index    : 1,
          title    : 'Nueva Capacitación Publicada',
          msg      : 'En su marca, listo, fuera y ya.',
          icon     : 'PackageIcon',
          time     : this.randomDate({sec: 40}),
          category : 'success'
        },
        { index    : 2,
          title    : '3 capacitaciones pendientes',
          msg      : 'Actualmente tiene 3 capacitaciones pendientes.',
          icon     : 'AlertOctagonIcon',
          time     : this.randomDate({min: 1}),
          category : 'danger'
        },
        { index    : 3,
          title    : 'Nuevo Mensaje de Kevin S.',
          msg      : 'Capsula Finalizada.',
          icon     : 'MessageSquareIcon',
          time     : this.randomDate({min: 6}),
          category : 'primary'
        },
        { index    : 4,
          title    : 'Próximo Evento',
          msg      : 'Se acerca la feria de cultura.',
          icon     : 'CalendarIcon',
          time     : this.randomDate({hr: 2}),
          category : 'warning'
        }
      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  computed: {
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    elapsedTime (startTime) {
      const x        = new Date(startTime)
      const now      = new Date()
      let timeDiff = now - x
      timeDiff    /= 1000

      const seconds = Math.round(timeDiff)
      timeDiff    = Math.floor(timeDiff / 60)

      const minutes = Math.round(timeDiff % 60)
      timeDiff    = Math.floor(timeDiff / 60)

      const hours   = Math.round(timeDiff % 24)
      timeDiff    = Math.floor(timeDiff / 24)

      const days    = Math.round(timeDiff % 365)
      timeDiff    = Math.floor(timeDiff / 365)

      const years   = timeDiff

      if (years > 0) {
        return `hace ${years + (years > 1 ? ' Años ' : ' Año ')}`
      } else if (days > 0) {
        return `hace ${days + (days > 1 ? ' Dias ' : ' Dia ')}`
      } else if (hours > 0) {
        return `hace ${hours + (hours > 1 ? ' Hrs. ' : ' Hora ')}`
      } else if (minutes > 0) {
        return `hace ${minutes + (minutes > 1 ? ' Mins. ' : ' Min ')}`
      } else if (seconds > 0) {
        return `hace ${seconds + (seconds > 1 ? ' seg.' : 'justo ahora')}`
      }

      return 'Just Now'
    },
    // Method for creating dummy notification time
    randomDate ({ hr, min, sec }) {
      const date = new Date()

      if (hr) date.setHours(date.getHours() - hr)
      if (min) date.setMinutes(date.getMinutes() - min)
      if (sec) date.setSeconds(date.getSeconds() - sec)

      return date
    }
  }
}

</script>

