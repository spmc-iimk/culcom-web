import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    open: true, // Automatically open the browser on server start
  },
  publicDir: 'src/css',
  build: {
    outDir: '../dist',  // Output directory for the build
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './src/home.html',
        home: './src/home.html',
        contactus: './src/contact-us.html',
        team: './src/team.html'
      }
    }
  }
});
