import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button
        disabled={i18n.language === 'en'}
        onClick={() => i18n.changeLanguage('en')}
      >
        🇬🇧
      </button>
      <button
        disabled={i18n.language === 'de'}
        onClick={() => i18n.changeLanguage('de')}
      >
        🇩🇪
      </button>
    </div>
  );
};

export default LanguageSwitcher;
