# Task 7 - I18N

Make the application multilingual.

1. Initialize `i18next`
   1. Create a new file `i18next.ts`
   2. Include the plugins `ICU` and `initReactI18next`
   3. Initialize `i18next` with a `fallbackLng`, `interpolation: {escapeValue: false}`, and `resources`
   4. Import the file into the `main.tsx` file
2. In the `List` component:
   1. Translate the loading message, the error message, and the column headers using `useTranslation`
3. In the `ListItem` component:
   1. Ensure that the date is correctly formatted
4. Implement a `LanguageSwitcher` component that allows you to switch languages (`useTranslation` and `i18n.changeLanguage()`)

Hint:
```ts
const {i18n} = useTranslation();
// set Language 
i18n.changeLanguage('de');
// get Language
console.log(i18n.language);
```