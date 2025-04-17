import { useData } from 'vitepress'
import en from '../i18n/en.json'
import it from '../i18n/it.json'

const translations = {
  en,
  it
}

export function useI18n() {
  const { lang } = useData()
  return translations[lang.value] || translations['en']
}
