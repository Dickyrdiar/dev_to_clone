<template>
  <div class="videos">
    <!--  -->
    <div class="container md:mx-auto text-center">
      <div v-for="video in videos" :key="video.id" :video="video">
        <article
          class="overflow-hidden rounded shadow-lg md:my-12 mx-5 mt-6 video"
        >
          <header class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <nuxt-link :to="`/devto/` + video.id"
              ><h3 class="text-md">
                <a
                  class="w-32 h-32 md:w-48 md:h-auto md:rouded-non rounded-full mx-auto"
                >
                  <img :src="video.cloudinary_video_url" />
                </a>
              </h3>
            </nuxt-link>
          </header>

          <section class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <p class="no-underline text-black">
              {{ video.title }}
            </p>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['videos']),
  },

  mounted() {
    this.getVideos()
  },

  methods: {
    ...mapActions(['getVideos']),
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/card';
</style>
