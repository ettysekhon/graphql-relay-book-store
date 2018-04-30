export default {
  state: {
    locale: 'en',
  },
  reducers: {
    setLocale(state, locale) {
      return { ...state, locale };
    },
  },
};
