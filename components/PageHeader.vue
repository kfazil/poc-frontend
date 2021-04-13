<template>
    <VueSlickCarousel :arrows="true" :dots="true" class="banner">
         <div class="item">
            <img src="~/assets/img/slider-1.jpg">
            <div class="hover-text">
               <div class="container">
                  <h1>Mission critical: power resilience, competitiveness and sustainability in European Data Centres</h1>
                  <a href="investments.html" class="btn btn-primary mt-4" tabindex="-1">Read more</a>
               </div>
            </div>
         </div>
         <div class="item">
            <img src="~/assets/img/slider-1.jpg">
            <div class="hover-text">
               <div class="container">
                  <h1>Mission critical: power resilience, competitiveness and sustainability in European Data Centres</h1>
                  <a href="investments.html" class="btn btn-primary mt-4" tabindex="-1">Read more</a>
               </div>
            </div>
         </div>
         <div class="item">
            <img src="~/assets/img/slider-1.jpg">
            <div class="hover-text">
               <div class="container">
                  <h1>Mission critical: power resilience, competitiveness and sustainability in European Data Centres</h1>
                  <a href="investments.html" class="btn btn-primary mt-4" tabindex="-1">Read more</a>
               </div>
            </div>
         </div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
    components: { VueSlickCarousel },
}

</script>