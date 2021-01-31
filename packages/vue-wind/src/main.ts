import { Plugin } from 'vue';

export const vueWild: Plugin = {
    install(app, options) {
        console.log('installed')
    }
}

export function createVueWind(){
    return vueWild;
}