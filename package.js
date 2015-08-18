Package.describe({
  name: 'cram974:dot-notation',
  version: '0.0.1',
  summary: 'Utilities for dot notation objects',
  git: 'http://github.com/Cram974/meteor-dot-notation',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('dot-notation.js');
  api.export('DotNotation');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cram974:dot-notation');
  api.addFiles('dot-notation-tests.js');
});
