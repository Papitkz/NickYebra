import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
     
    // server: {
    //       host: '10.169.141.193', // This allows access from other devices on the network
    //     // host: '10.169.142.105', // This allows access from other devices on the network
    //     // host: '10.169.142.58', // This allows access from other devices on the network
    //     // host: '10.169.142.63',
    //     // host: '10.169.142.131',
        
    //     port: 5173,
    //     proxy: {
    //         '/api': 'http://10.169.141.193:8001' // Adjust this URL if needed
    //     }
    // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
