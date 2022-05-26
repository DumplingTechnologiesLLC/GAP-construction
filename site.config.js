const industries = require('./industries');
const works = require('./works');
const awards = require('./awards');
const employees = require('./employees');

module.exports = {
  build: {
    srcPath: './src',
    outputPath: './public'
  },
  site: {
    title: 'GAP Advisors',
    industries,
    works,
    awards,
    employees
  }
};
