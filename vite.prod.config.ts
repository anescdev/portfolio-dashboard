import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dashboard/",
  plugins: [react()],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "./src/context"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@events": path.resolve(__dirname, "./src/events"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    }
  }
})
