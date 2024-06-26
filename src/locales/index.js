import { createI18n } from 'vue-i18n'
import zhCN from './langs/zh-cn'
import enUS from './langs/en-us'

const messages = {
  zh: { ...zhCN },
  en: { ...enUS },
}

const lang = (navigator.language || navigator.browserLanguage).toLowerCase()

const i18n = createI18n({
  messages,
  locale: lang.substr(0, 2),
  allowComposition: true,
  legacy: false, // 如果使用 compositionAPI，必须为 false
  fallbackLocale: 'zh', // 设置后备语言
  globalInjection: true, // 全局注册 $t 方法
})
export default i18n
