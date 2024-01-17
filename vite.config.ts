/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default () => {
    return defineConfig({
        plugins: [vue(), react()],
        server: {
            host: true,
            port: 3000
        },
    });
}