import auth from './auth';
import notFoundLocale from './notFound';
import yup from './yup';

const files = [].concat(auth, notFoundLocale, yup);

const locales = {
  en: {
    translations: {}
  },
  id: {
    translations: {}
  }
};

files.forEach((file) => {
  if (file.en) {
    locales.en.translations = { ...locales.en.translations, ...file.en };
  }
  if (file.id) {
    locales.id.translations = { ...locales.id.translations, ...file.id };
  }
});

export default locales;
