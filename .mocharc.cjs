module.exports = {
  color: true,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ['ts'],
  'fail-zero': false,
  recursive: false,
  reporter: 'spec',
  timeout: '2000', // same as "timeout: '2s'"
  // timeout: false, // same as "timeout: 0"
  ui: 'bdd',
};
