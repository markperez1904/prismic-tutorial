import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://marks-prismic-tutorial.prismic.io/graphql'
  }),
  cache: new InMemoryCache()
})

const linkages = () => {
  return client
    .query({
      query: gql`
        {
          allBlog_postss(sortBy: date_DESC) {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      `
    })
    .then(res => {
      return res.data.allBlog_postss.edges.map(posts => {
        return '/blog/' + posts.node._meta.uid
      })
    })
}

export default {
  mode: 'universal',

  // Headers of the page
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ],
    // Link to Google Fonts and Website Image
    link: [
      // Favicon icon
      { rel: 'icon', type: 'image/x-icon', href: '/nuxtjs.png' },

      // Google Fonts CDN
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap'
      }
    ]
  },

  // Customize the progress-bar color on mobile devices
  loading: { color: '#2f495e' },

  // Global CSS
  css: ['@/static/css/main.css'],

  // Plugins to load before mounting the App
  plugins: ['~/plugins/moment.js'],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/pwa', // this module will give me PWA benefits by default!
    'nuxt-trailingslash-module', // add trailing slash on URLs
    'nuxt-buefy',
    '@nuxtjs/apollo'
  ],

  // Using apollo to query blog posts
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js'
    }
  },

  // Generate index.html files for each blog post
  generate: {
    routes: linkages
  }
}
