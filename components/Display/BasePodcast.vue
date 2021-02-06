<template>
  <div class="podcasts">
    <div class="container md:mx-auto text-center">
      <div
        v-for="podcast in podcast_episodes"
        :key="podcast.id"
        :podcast="podcast"
      >
        <!-- <p>{{ podcast.title }}</p> -->
        <article
          class="overflow-hidden rounded shadow-lg md:my-12 mx-5 mt-6 podcast"
        >
          <header class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <nuxt-link :to="`/devto/` + podcast.id">
              <a
                class="w-32 h-32 md:w-48 md:h-auto md:rouded-non rounded-full mx-auto"
              >
                <img :src="podcast.image_url" />
              </a>
            </nuxt-link>
          </header>

          <section class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <p class="no-underline text-black">
              {{ podcast.title }}
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
    ...mapState(['podcast_episodes']),
  },

  mounted() {
    this.getPodcasts()
    console.log(this.podcast_episodes)
  },

  methods: {
    ...mapActions(['getPodcasts']),
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/card';
</style>
