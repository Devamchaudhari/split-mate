import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			shared: path.resolve(__dirname, 'src/shared'),
			feature: path.resolve(__dirname, 'src/feature'),
			assets: path.resolve(__dirname, 'src/assets')
		}
	}
});
