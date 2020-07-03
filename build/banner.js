const pkg = require('../package.json');

const banner = ['/**',
  ` * ${pkg.name} - ${pkg.description}`,
  ` * @version v${pkg.version}`,
  ` * @release ${new Date()}`,
  ' */',
].join('\n');

module.exports = banner;
