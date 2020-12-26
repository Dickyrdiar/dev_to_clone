<template>
  <div class="podcast">
    <div class="md:caontainer md:mx-auto">
      <div v-for="podcast in podcasts" :key="podcast.id">
        <article class="overflow-hidden rounded shadow-lg card">
          <header class="lex items- justify-betweb leading-tight p-2 md:p-4">
            <h2 class="text-lg">
              <a class="no-underline hover:underline text-black">
                <nuxt-link :to="`/dev_to/podcast/` + podcast.id">
                  <img :src="podcast.image_url" />
                </nuxt-link>
              </a>
            </h2>
          </header>

          <section class="flex-items- justify-betweb leading-tight p-2 md:p-4">
            <!-- <p class="no-underline hover:underline text-black">
              {{ podcast.title }}
            </p> -->
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      podcasts: [],
      error: null,
    }
  },

  async mounted() {
    try {
      const res = await this.$axios.get('/podcast_episodes')
      this.podcasts = res.data
    } catch (error) {
      this.error = error
    }
  },
}
</script>

<style lang="scss" scoped>
.podcast {
  margin-top: 7rem;
  .card {
    width: 22rem;
    height: 24rem;
    float: left;
    margin-left: 3rem;
    margin-top: 2rem;
    // .tag {
    //   float: left;
    // }
  }
}
</style>
