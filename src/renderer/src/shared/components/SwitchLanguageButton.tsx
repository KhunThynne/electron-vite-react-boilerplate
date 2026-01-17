import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

export const SwitchLanguageButton = () => {
  const { i18n } = useTranslation()
  const language = i18n.language as 'en' | 'th'
  const changeLanguage = (lng: 'en' | 'th') => {
    i18n.changeLanguage(lng)
  }

  return language === 'th' ? (
    <Button onClick={() => changeLanguage('en')} className="uppercase">
      {language}
    </Button>
  ) : (
    <Button onClick={() => changeLanguage('th')} className="uppercase">
      {language}
    </Button>
  )
}
