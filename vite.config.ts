import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@Request': path.resolve(__dirname, './src/request'),
			'@Assets': path.resolve(__dirname, './src/assets')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "/src/assets/scss/base.scss";'
			}
		}
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://xindian.com:8888',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
