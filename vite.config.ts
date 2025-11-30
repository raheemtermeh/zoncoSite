import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // loadEnv دیگر برای API Key استفاده نمی‌شود، اما برای سایر متغیرها می‌تواند باقی بماند
    const env = loadEnv(mode, '.', ''); 
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // خطوط مربوط به API Key حذف شدند
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});