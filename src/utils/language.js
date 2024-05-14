const LANGUAGE = {
  ID: 'id',
  EN: 'en'
};

function getLanguage() {
  return localStorage.language || LANGUAGE.ID;
}
function setLanguage(lang) {
  if (Object.values(LANGUAGE).includes(lang)) {
    localStorage.language = lang;
  }
}

export { LANGUAGE, getLanguage, setLanguage };
