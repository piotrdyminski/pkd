import favicon from './extensions/favicon.ico';
import logo from './extensions/header-icon.png';

export default {
  config: {
    auth: {
      logo: logo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: logo,
    },
    theme: {
      colors: {
        // Button colors need to be set separately due to a known issue.
        // https://github.com/strapi/documentation/issues/911#issuecomment-1137728744
        primary100: '#eaf5ff',
        primary200: '#b8e1ff',
        primary500: '#66b7f1',
        buttonPrimary500: '#66b7f1',
        primary600: '#228be6',
        buttonPrimary600: '#228be6',
        primary700: '#228be6',
      },
    },
    translations: {
      pl: {
        'Auth.form.welcome.title': 'Parafia',
        'Auth.form.welcome.subtitle': 'Kielce-Dyminy',
        'app.components.LeftMenu.navbrand.title': 'Parafia',
        'app.components.LeftMenu.navbrand.workplace': 'Kielce-Dyminy',
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap() {},
};
