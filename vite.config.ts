import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'package-download-handler',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';
            
            // Serve clean ZIP download with forced attachment headers
            if (url === '/api/download-zip' || url === '/epsa-cloudflare-pages.zip') {
              const zipPath = path.resolve(__dirname, 'public/epsa-cloudflare-pages.zip');
              if (fs.existsSync(zipPath)) {
                const stat = fs.statSync(zipPath);
                res.writeHead(200, {
                  'Content-Type': 'application/zip',
                  'Content-Disposition': 'attachment; filename="epsa-cloudflare-pages.zip"',
                  'Content-Length': stat.size.toString(),
                  'Cache-Control': 'no-cache, no-store, must-revalidate',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                  'Access-Control-Allow-Origin': '*',
                });
                fs.createReadStream(zipPath).pipe(res);
                return;
              }
            }

            // Serve TAR.GZ backup
            if (url === '/api/download-tar' || url === '/epsa-cloudflare-pages.tar.gz') {
              const tarPath = path.resolve(__dirname, 'public/epsa-cloudflare-pages.tar.gz');
              if (fs.existsSync(tarPath)) {
                const stat = fs.statSync(tarPath);
                res.writeHead(200, {
                  'Content-Type': 'application/gzip',
                  'Content-Disposition': 'attachment; filename="epsa-cloudflare-pages.tar.gz"',
                  'Content-Length': stat.size.toString(),
                  'Cache-Control': 'no-cache, no-store, must-revalidate',
                  'Access-Control-Allow-Origin': '*',
                });
                fs.createReadStream(tarPath).pipe(res);
                return;
              }
            }

            // Serve standalone self-contained index.html download
            if (url === '/api/download-index-html' || (url === '/index.html' && req.url?.includes('download=1'))) {
              const candidates = [
                path.resolve(__dirname, 'dist/standalone-index.html'),
                path.resolve(__dirname, 'public/standalone-index.html'),
                path.resolve(__dirname, 'dist/index.html'),
              ];
              const indexPath = candidates.find(p => fs.existsSync(p));
              if (indexPath) {
                const stat = fs.statSync(indexPath);
                res.writeHead(200, {
                  'Content-Type': 'text/html; charset=utf-8',
                  'Content-Disposition': 'attachment; filename="index.html"',
                  'Content-Length': stat.size.toString(),
                  'Cache-Control': 'no-cache, no-store, must-revalidate',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                  'Access-Control-Allow-Origin': '*',
                });
                fs.createReadStream(indexPath).pipe(res);
                return;
              }
            }

            // Direct preview of standalone index.html
            if (url === '/standalone-index.html') {
              const standalonePath = path.resolve(__dirname, 'dist/standalone-index.html');
              if (fs.existsSync(standalonePath)) {
                res.writeHead(200, {
                  'Content-Type': 'text/html; charset=utf-8',
                  'Cache-Control': 'no-cache, no-store, must-revalidate',
                });
                fs.createReadStream(standalonePath).pipe(res);
                return;
              }
            }

            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

