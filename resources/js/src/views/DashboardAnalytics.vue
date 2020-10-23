<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">

      <!-- CARD 1: CONGRATS -->
      <div class="vx-col w-full lg:w-1/2 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
                    <img src="@assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
                    <img src="@assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
          <feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">Bienvenido nuevamente, {{ checkpointReward.userName }}.</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">¿Estas listo para seguir aprendiendo?</p>
        </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <div class="vx-card p-2"><!---->
        <div class="vx-card__collapsible-content vs-con-loading__container">
            <div class="vx-card__body text-center">
            <div class="text-center">
                <span class="p-3 inline-flex rounded-full feather-icon select-none relative text-primary mb-4" style="background:#eae8fd;"><feather-icon icon="BarChart2Icon" /></span>
                <h4>Estadistica de mis cursos</h4>
            </div>
            <vs-dropdown class="pt-5">
                <button type="button" name="button" class="vs-component vs-button w-full mt-6 vs-button-null vs-button-gradient isActive btn-drop text-center" style="background: #958cf2;">
                    Elije un curso
                    <vs-icon class="" icon="expand_more"></vs-icon>
                </button>
                <vs-dropdown-menu>
                    <vs-dropdown-item>
                    Option 1
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                    Option 2
                    </vs-dropdown-item>
                    <vs-dropdown-group>
                    <vs-dropdown-item>
                        Option 1
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        Option 2
                    </vs-dropdown-item>

                    <vs-dropdown-group>
                        <vs-dropdown-item>
                        sub Options 1
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                        sub Options 2
                        </vs-dropdown-item>
                    </vs-dropdown-group>

                    </vs-dropdown-group>
                    <vs-dropdown-item divider>
                    Option 3
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
            </div>  <!---->
        </div>
        <div class="vx-card__code-container collapsed" style="max-height: 0px; display: none;">
            <div class="code-content">
            <pre class="language-markup">
                <code class="language-markup"></code>
            </pre>
            </div>
        </div>
        </div>
       </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <statistics-card-line icon="ShoppingBagIcon" statistic="5" statisticTitle="Cursos Completados" :chartData="ordersRecevied.series" color="primary" type="area"></statistics-card-line>
      </div>
    </div>

    <div class="vx-row">

      <!-- CARD 4: SESSION -->
      <div class="vx-col w-full md:w-1/2 mb-base">
        <vx-card>
          <div class="vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row">

            <!-- LEFT COL -->
            <div class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between" v-if="salesBarSession.analyticsData">
              <div>
                <h2 class="mb-1 font-bold">{{ salesBarSession.analyticsData.session }} min.</h2>
                <span class="font-medium">Invertidos estudiando el último mes</span>
              </div>
              <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4">Ingresar al Curso</vs-button>
            </div>

            <!-- RIGHT COL -->
            <div class="vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 md:mb-base sm:mb-0 mb-base">
              <vue-apex-charts type="bar" height="200" :options="analyticsData.salesBar.chartOptions" :series="salesBarSession.series" v-if="salesBarSession.series" />
            </div>

          </div>
          <vs-divider class="my-6 pt-6 pb-8"></vs-divider>
          <div class="vx-row">
            <div class="vx-col w-1/2 mb-3">
              <p>Lecciones Aprobadas: 10</p>
              <vs-progress class="block mt-1" :percent="20" color="primary"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Tiempo Invertido en el curso: 20 min.</p>
              <vs-progress class="block mt-1" :percent="20" color="warning"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Porcentaje Completado: 20%</p>
              <vs-progress class="block mt-1" :percent="70" color="danger"></vs-progress>
            </div>
            <div class="vx-col w-1/2 mb-3">
              <p>Tiempo desde su inscripción: 10 dias</p>
              <vs-progress class="block mt-1" :percent="20" color="success"></vs-progress>
            </div>
          </div>
        </vx-card>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
          <vx-card title="Porcentaje Completado del Curso">

              <div slot="no-body" v-if="supportTracker.analyticsData">
                  <div class="vx-row text-center">

                      <!-- Open Tickets Heading -->
                      <div class="vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last">
                          <div class="lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6">
                              <h1 class="font-bold text-5xl">{{ supportTracker.analyticsData.openTickets }}</h1>
                              <small>Lecciones</small>
                          </div>
                      </div>

                      <!-- Chart -->
                      <div class="vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6">
                          <vue-apex-charts type="radialBar" height="385" :options="analyticsData.supportTrackerRadialBar.chartOptions" :series="supportTracker.series" />
                      </div>
                  </div>

                  <!-- Support Tracker Meta Data -->
                  <div class="flex flex-row justify-between px-8 pb-2 mt-2">
                      <p class="text-center" v-for="(val, key) in supportTracker.analyticsData.meta" :key="key">
                        <span class="block">{{ key }}</span>
                        <span class="text-2xl font-semibold">{{ val }}</span>
                      </p>
                  </div>
              </div>
          </vx-card>
      </div>
    </div>

        <div class="vx-row">

            <!-- CARD 7: Sales Stats -->
            <div class="vx-col w-full lg:w-1/2 mb-base">
              <vx-card title="Tiempo requerido para completar el curso">
                <template slot="actions">
                  <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </template>
                <div class="flex">
                  <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>Tiempo Faltante</span></span>
                  <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-success"></div><span>Tiempo Invertido</span></span>
                </div>
                <div slot="no-body-bottom">
                  <vue-apex-charts type="radar" height="385" :options="analyticsData.statisticsRadar.chartOptions" :series="salesRadar.series" />
                </div>
              </vx-card>
            </div>

            <!-- CARD 8: Activity Timeline -->
            <div class="vx-col w-full lg:w-1/2 mb-base">
                <vx-card title="Lecciones Completadas" class="pb-2 pt-2">
                    <vx-timeline :data="timelineData" />
                </vx-card >
            </div>
        </div>

    <!--
    <div class="vx-row">
      CARD 9: DISPATCHED ORDERS
      <div class="vx-col w-full">
        <vx-card title="Dispatched Orders">
          <div slot="no-body" class="mt-4">
            <vs-table :data="dispatchedOrders" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>ORDER NO.</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>OPERATORS</vs-th>
                <vs-th>LOCATION</vs-th>
                <vs-th>DISTANCE</vs-th>
                <vs-th>START DATE</vs-th>
                <vs-th>EST DELIVERY DATE</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + data[indextr].statusColor"></div>{{data[indextr].status}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                        <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                            <vx-tooltip :text="user.name" position="bottom">
                                <vs-avatar :src="user.img" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                            </vx-tooltip>
                        </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].distance}}</span>
                    <vs-progress :percent="data[indextr].distPercent" :color="data[indextr].statusColor"></vs-progress>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].estDelDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>

        </vx-card>
      </div>
    </div>
    -->

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from '@/components/timeline/VxTimeline'

export default {
  data () {
    return {
      checkpointReward: {},
      subscribersGained: {},
      ordersRecevied: {},
      salesBarSession: {},
      supportTracker: {},
      productsOrder: {},
      salesRadar: {},

      timelineData: [
        {
          color: 'primary',
          icon: 'PlusIcon',
          title: 'Procedimientos Especiales',
          desc: 'Lección relacionada con los procedimientos especiales.',
          time: 'Completada Hace 25 mins.'
        },
        {
          color: 'warning',
          icon: 'PlusIcon',
          title: 'Procedimientos Rutinarios',
          desc: 'Lección relacionada con los procedimientos rutinarios.',
          time: 'Completada Hace 15 Días'
        },
        {
          color: 'danger',
          icon: 'UsersIcon',
          title: 'Personal Administrativo',
          desc: 'Lección relacionada con el personal administrativo.',
          time: 'Completada Hace 20 Días'
        },
        {
          color: 'success',
          icon: 'LayoutIcon',
          title: 'Estructura Organizacional',
          desc: 'Lección relacionada con la estructura organizacional.',
          time: 'Completada Hace 25 Días'
        },
        {
          color: 'primary',
          icon: 'TvIcon',
          title: 'Noticias Recientes',
          desc: 'Lección relacionada con la noticias recientes.',
          time: 'Completada Hace 28 Días'
        }
      ],


      analyticsData,
      dispatchedOrders: []
    }
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VxTimeline
  },
  created () {
    //  User Reward Card
    this.$http.get('/api/user/checkpoint-reward')
      .then((response) => { this.checkpointReward = response.data })
      .catch((error)   => { console.log(error) })

      // Subscribers gained - Statistics
    this.$http.get('/api/card/card-statistics/subscribers')
      .then((response) => { this.subscribersGained = response.data })
      .catch((error)   => { console.log(error) })

      // Orders - Statistics
    this.$http.get('/api/card/card-statistics/orders')
      .then((response) => { this.ordersRecevied = response.data })
      .catch((error)   => { console.log(error) })

      // Sales bar - Analytics
    this.$http.get('/api/card/card-analytics/sales/bar')
      .then((response) => { this.salesBarSession = response.data })
      .catch((error)   => { console.log(error) })

      // Support Tracker
    this.$http.get('/api/card/card-analytics/support-tracker')
      .then((response) => { this.supportTracker = response.data })
      .catch((error)   => { console.log(error) })

      // Products Order
    this.$http.get('/api/card/card-analytics/products-orders')
      .then((response) => { this.productsOrder = response.data })
      .catch((error)   => { console.log(error) })

      // Sales Radar
    this.$http.get('/api/card/card-analytics/sales/radar')
      .then((response) => { this.salesRadar = response.data })
      .catch((error)   => { console.log(error) })

      // Dispatched Orders
    this.$http.get('/api/table/dispatched-orders')
      .then((response) => { this.dispatchedOrders = response.data })
      .catch((error)   => { console.log(error) })
  }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
