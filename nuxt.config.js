require('dotenv').config() // we already added this ealier when making our .env file
const path = require('path')

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Powercontinuity',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // CSS file in the project
        '~/assets/css/slick-theme.css',
        '~/assets/css/slick.css',
        '~/assets/css/responsive.css',
        '~/assets/css/style.css',
        // SCSS file in the project
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-slick-carousel.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        //https://www.npmjs.com/package/@nuxtjs/fontawesome
        ['@nuxtjs/fontawesome', {
            component: 'Fa',
            icons: {
                solid: true
            }
        }]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://axios.nuxtjs.org
        '@nuxtjs/axios'
    ],

    axios: {
        baseURL: process.env.CMS_URL, // Used as fallback if no runtime config is provided
    },

    // fontawesome: {
    //     icons: {
    //         solid: ['faHome'],
    //         regular: ['fasAdjust']
    //     }
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true
        }
    }
}