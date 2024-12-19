import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    open: true, // Automatically open the browser on server start
  },
  build: {
    outDir: '../dist',  // Output directory for the build
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
