import {bulmaComponentGenerator as bulma} from 'vue-bulma-components'
import {mapGetters, mapActions} from 'vuex'

import icon from '../icon/icon.vue'

export default {
  'components': {
    'navbar':          bulma('navbar', 'nav'),
    'navbar-brand':    bulma('navbar-brand', 'div'),
    'navbar-menu':     bulma('navbar-menu', 'div'),
    'navbar-burger':   bulma('navbar-burger', 'div'),
    'navbar-start':    bulma('navbar-start', 'div'),
    'navbar-end':      bulma('navbar-end', 'div'),
    'navbar-item':     bulma('navbar-item', 'div'),
    'navbar-link':     bulma('navbar-link', 'div'),
    'navbar-dropdown': bulma('navbar-dropdown', 'div'),
    'navbar-divider':  bulma('navbar-divider', 'div'),
    'b-container':     bulma('container', 'div'),
    icon
  },
  'methods': {
    ...mapActions([
      'logout'
    ]),
    toggleOpen () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  },
  data () {
    return {
      'open': false
    }
  },
  'computed': mapGetters([
    'user'
  ])
}