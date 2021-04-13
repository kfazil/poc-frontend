<template>
  <div>
      <page-nav/>
      <page-header/>
      <Nuxt />
      <page-footer/>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>


<script>
import _ from "lodash"
import { mapMutations, mapState } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'
import PageNav from '~/components/PageNav.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageNav,
    PageFooter
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      setOptions: 'SET_OPTIONS_DATA'
    })
  },
  async fetch () {
    const response = await this.$axios.post('api/singletons/get/general_options', {
        // filter: { published: true },
        // sort: {_created:-1},
        // populate: 1
    }, {
      headers: { 
        'Content-Type': 'application/json',
        'Cockpit-Token': process.env.API_TOKEN
      }
    });
    //console.log(_);
    this.setOptions(response.data.options);

    if(response.data.hasOwnProperty('options')){
      if(response.data.options[0].hasOwnProperty('settings')){
        if(response.data.options[0].settings.id == 'options'){ 
            // grab data for header
            if(response.data.options[0].hasOwnProperty('children')){
              if(_.find(response.data.options[0].children, {'name': 'Footer'})){
                console.log(response.data.options[0].children)  
              }
              if(_.find(response.data.options[0].children, {'name': 'Header'})) {
                  console.log('Header found')  
              }
            }
          } else {
            console.error('Options API [LEVEL:2]: Invalid response from options api');            
          }
        }

    } else {
      console.error('Options API [LEVEL:1]: Invalid response from options api');
    }
  

  }
}
</script>