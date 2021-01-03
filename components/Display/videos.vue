<template>
  <div class="video">
    <main class="max-w-5xl mx-auto pb-10 pt-10">
      <div class="flex flex-wrap overflow-hidden">
        <!-- post -->
        <div v-for="video in videos" :key="video.id">
          <div class="mr-2 md:mr-4 ml-2">
            <div class="pb-10">
              <!-- first post -->

              <article class="overflow-hidden rounded shadow-lg card">
                <header
                  class="flex items- justify-betweb leading-tight p-2 md:p-4"
                >
                  <h2 class="text-lg">
                    <a class="no-underline hover:underline text-black">
                      <img :src="video.cloudinary_video_url" />
                    </a>
                  </h2>
                </header>

                <section
                  class="flex items- justify-betweb leading-tight p-2 md:p-4"
                >
                  <p class="no-underline hover:underline text-black">
                    <nuxt-link :to="`/dev_to/` + video.id">
                      {{ video.title }}
                    </nuxt-link>
                  </p>
                </section>

                <footer>
                  <div class="px-6 pt-4 pb-2">
                    <span
                      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tag"
                      >{{ video.video_duration_in_minutes }}</span
                    >
                  </div>

                  <div class="px-6 pt-4 pb-2">
                    <p class="user">video by: {{ video.user.name }}</p>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
      errors: null,
    }
  },

  async mounted() {
    try {
      const res = await this.$axios.get('/videos')
      this.videos = res.data
    } catch (error) {
      this.error = error
    }
  },
}
</script>

<style lang="scss" scoped>
.video {
  .card {
    width: 16.5rem;
    height: 22rem;
    float: left;
    margin-left: 2rem;
    margin-top: 2rem;
    // .tag {
    //   float: left;
    // }
  }
}
</style>
