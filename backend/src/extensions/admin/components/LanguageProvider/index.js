/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import defaultsDeep from 'lodash/defaultsDeep';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import LocalesProvider from '../LocalesProvider';
import init from './init';
import reducer, { initialState } from './reducer';
import localStorageKey from './utils/localStorageKey';

const LanguageProvider = ({ children, localeNames, messages }) => {
  const [{ locale }, dispatch] = useReducer(reducer, initialState, () => init(localeNames));

  useEffect(() => {
    // Set user language in local storage.
    window.localStorage.setItem(localStorageKey, locale);
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  const changeLocale = (locale) => {
    dispatch({
      type: 'CHANGE_LOCALE',
      locale,
    });
  };

  const appMessages = defaultsDeep(messages[locale], messages.en);

  // #custom-change (defaultLocale)

  return (
    <IntlProvider locale={locale} defaultLocale="pl" messages={appMessages} textComponent="span">
      <LocalesProvider changeLocale={changeLocale} localeNames={localeNames} messages={appMessages}>
        {children}
      </LocalesProvider>
    </IntlProvider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  localeNames: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.object.isRequired,
};

export default LanguageProvider;
