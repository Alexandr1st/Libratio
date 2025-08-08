// Создаём 404.html для SPA-фоллбэка на GitHub Pages
const { copyFileSync } = require('node:fs');
try {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('SPA fallback 404.html created');
} catch (e) {
  console.error('Failed to create 404.html', e);
}
