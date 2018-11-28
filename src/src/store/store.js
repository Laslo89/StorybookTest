import Vue from 'vue'
import Vuex from 'vuex'

import systemHealthModule from './system-health/system-health'
import tablesModule from './tables/tables'
import { sensorsModule } from './sensors/sensors-module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    systemHealth: systemHealthModule,
    sensors: sensorsModule,
    tables: tablesModule,
  },
})
