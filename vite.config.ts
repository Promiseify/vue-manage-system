import { defineConfig } from 'vite';
// vite中的插件用于支持.vue文件
import vue from '@vitejs/plugin-vue';
// vite-plugin-vue-setup-extend插件中 用于使用vue3的特性 <script setup>
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
// AutoImport配置自动导入插件  
import AutoImport from 'unplugin-auto-import/vite';
// Components配置自动导入Vue组件
import Components from 'unplugin-vue-components/vite';
// 自动导入的elmentplus的组件库
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	// 这个属性用于提前优化依赖项,Vite 会在服务器启动时预构建这个模块以提高页面加载速度
	optimizeDeps: {
		// 表示了一个 JavaScript 图表库。
		include: ['schart.js'] 
	}
});
