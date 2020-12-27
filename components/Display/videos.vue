<template>
  <div class="video">
    <main class="max-w-5xl mx-auto pb-10 pt-10">
      <div class="flex flex-warp overflow-hidden">
        <div v-for="video in videos" :key="video.id" class="card">
          <div class="mr-2 md:mr-4 ml-2">
            <div class="pb-10">
              <article class="overflow-hidden rounded shadow-lg card">
                <header
                  class="flex items- justify-betweb leading-tight p-2 md:p-4"
                >
                  <h2 class="text-lg">
                    <a class="no-underline hover:underline text-black">
                      <video-frame :src="video.video_source_url"></video-frame>
                    </a>
                  </h2>
                </header>

                <section
                  class="flex items- justify-betweb leading-tight p-2 md:p-4"
                >
                  <p class="no-underline hover:underline text-black">
                    {{ video.title }}
                  </p>
                </section>

                <footer>
                  <div class="px-6 pt-4 pb-2">
                    <p>{{ video.video_duration_in_minutes }}</p>
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
    width: 14.5rem;
    height: 24rem;
    float: left;
    margin-left: 2rem;
    margin-top: 2rem;
    // .tag {
    //   float: left;
    // }
  }
}
</style>
