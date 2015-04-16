Package.describe({
  name: 'goltfisch:cameratag',
  summary: 'Cameratag library for Meteor',
  version: '0.1.0',
  git: 'https://github.com/goltfisch/meteor-cameratag.git'
});

Package.onUse(function (api) {
  api.addFiles('cameratag.js', 'client');
});
