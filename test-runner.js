const { exec } = require('child_process');

const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browser => {
  const command = `BROWSER=${browser} npx cucumber-js`;
  exec(command);
});
