import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src',
			'@Step': '/src/components/Step'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "/src/assets/scss/base.scss";'
			}
		}
	}
})
