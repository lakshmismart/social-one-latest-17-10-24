import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '192.168.1.31', 
//     port: 3000, 
//     strictPort: true, 
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom'] 
//   }
// });

