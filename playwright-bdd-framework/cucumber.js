export default {
    // paths: ['features/**/*.feature'],
    import: ['support/register.js', 'support/hooks.ts', 'step-definitions/**/*.ts'],
    format: ['progress-bar', 'html:reports/cucumber-report.html']
};