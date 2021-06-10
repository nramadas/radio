import express from 'express';

let app = require('./server').default;

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./server', function () {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.WEB_PORT || 5000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, () => {
    console.log(`> Started on port ${port}`);
  })
  .on('error', err => {
    console.log('error', err);
  });
