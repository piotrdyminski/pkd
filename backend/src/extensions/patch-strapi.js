/*
  Script for copying the files with custom changes to admin, dashboard panels and plugins,
  which is then used by the 'patch-package' to apply it directly in the source code of strapi package.
  For now there is no recommended solution to apply such changes in the strapi v4.
  source: https://forum.strapi.io/t/customize-the-dashboard-welcome-page/939/24
*/

const fs = require('fs');
fs.cp('src/extensions/admin', 'node_modules/@strapi/admin/admin/src', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
