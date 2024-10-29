const report = require('multiple-cucumber-html-reporter');
report.generate({
  jsonDir: "./test-results/reports/",
  reportPath: "./test-results/reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Oct 28th 2024, 02:31 PM IST" },
      { label: "Execution End Time", value: "Nov 19th 2024, 02:56 PM IST" },
    ],
  },
})
