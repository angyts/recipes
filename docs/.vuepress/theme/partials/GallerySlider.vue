<template>
  <main id="site-slider" class="site-slider outer">
      <div class="site-slider-carousell">
        <carousel
            v-if="header.showCover"
            :scrollPerPage="true"
            :perPageCustom="[[480, 1], [768, 3], [1020, 5]]"
            :navigationEnabled="false"
        >
          <slide
              v-for="(post, index) in posts"
              :key="index"
          >
            <a :href="$withBase(post.path)">
              <img :src="$withBase(post.image)" />
              <small>{{ post.title }}</small>
            </a>
          </slide>
        </carousel>
      </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {Carousel, Slide} from "vue-carousel";

  export default {
    props: ["header"],
    components: {Carousel, Slide},
    computed: mapGetters(['posts'])
  }
</script>

<style>
slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>