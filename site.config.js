const industries = require('./industries');
const works = require('./works');

module.exports = {
  build: {
    srcPath: './src',
    outputPath: './public'
  },
  site: {
    title: 'GAP Advisors',
    industries,
    works
  }
};
