/*
 *
 * LanguageProvider reducer
 *
 */

const initialState = {
  localeNames: { pl: 'Polski' }, // #custom-change
  locale: 'pl', // #custom-change
};

const languageProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      const { locale } = action;

      if (!state.localeNames[locale]) {
        return state;
      }

      return { ...state, locale };
    }
    default: {
      return state;
    }
  }
};

export default languageProviderReducer;
export { initialState };
