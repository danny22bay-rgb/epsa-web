const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const distHtml = fs.readFileSync(indexPath, 'utf8');

// Find CSS file
const cssMatch = distHtml.match(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/i);
// Find JS file
const jsMatch = distHtml.match(/<script[^>]+src="(\/assets\/[^"]+\.js)"[^>]*>/i);

let cssContent = '';
let jsContent = '';

if (cssMatch) {
  const cssPath = path.join(distDir, cssMatch[1]);
  if (fs.existsSync(cssPath)) {
    cssContent = fs.readFileSync(cssPath, 'utf8');
  }
}

if (jsMatch) {
  const jsPath = path.join(distDir, jsMatch[1]);
  if (fs.existsSync(jsPath)) {
    jsContent = fs.readFileSync(jsPath, 'utf8');
  }
}

// Build self-contained standalone HTML
let standaloneHtml = distHtml;

if (cssMatch && cssContent) {
  standaloneHtml = standaloneHtml.replace(
    cssMatch[0],
    `<style>\n/* EPSA Tailwind & Design System Styles */\n${cssContent}\n</style>`
  );
}

if (jsMatch && jsContent) {
  // Safe replacement of script tag
  const safeJs = jsContent.replace(/<\/script/gi, '<\\/script');
  standaloneHtml = standaloneHtml.replace(
    jsMatch[0],
    `<script type="module">\n/* EPSA React Application Bundle */\n${safeJs}\n</script>`
  );
}

// Ensure the standalone index file is saved in both dist and public
const distStandalonePath = path.join(distDir, 'standalone-index.html');
const publicStandalonePath = path.join(publicDir, 'standalone-index.html');
const publicIndexDownloadPath = path.join(publicDir, 'epsa-standalone.html');
const distRootIndexPath = path.join(distDir, 'index.single.html');

fs.writeFileSync(distStandalonePath, standaloneHtml, 'utf8');
fs.writeFileSync(publicStandalonePath, standaloneHtml, 'utf8');
fs.writeFileSync(publicIndexDownloadPath, standaloneHtml, 'utf8');
fs.writeFileSync(distRootIndexPath, standaloneHtml, 'utf8');

console.log('✓ Successfully generated standalone index.html:');
console.log(`  - ${distStandalonePath} (${Math.round(standaloneHtml.length / 1024)} KB)`);
console.log(`  - ${publicStandalonePath}`);
