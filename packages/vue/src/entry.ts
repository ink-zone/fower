import { configure } from '@styli/core'
import presetWeb from '@styli/preset-web'
import _Vue, { PluginFunction } from 'vue'
import vcss from '@/v-css'

const isVue2 = false

configure(presetWeb)

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

const install: InstallFunction = function installStyli(app: typeof _Vue) {
  // if (install.installed) return
  // install.installed = true
  const opt: any = {}

  if (isVue2) {
    opt.bind = vcss.bind
  } else {
    opt.mounted = vcss.mounted
  }

  app.directive(vcss.name, opt)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */

if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = (global as any).Vue
  }
  if (GlobalVue) {
    ;(GlobalVue as typeof _Vue).use(plugin)
  }
}
// Default export is library as a whole, registered via Vue.use()
export default plugin
