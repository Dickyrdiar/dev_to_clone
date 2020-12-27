<template>
  <div class="index">
    <!-- <div v-if="podcasts && podcasts.length"> -->
    <main class="max-w-5xl mx-auto pb-10 pt-10">
      <div class="flex flex-wrap overflow-hidden">
        <!-- post -->
        <div v-for="podcast in podcasts" :key="podcast.id">
          <div class="mr-2 md:mr-4 ml-2">
            <div class="pb-10">
              <!-- first post -->
              <p>{{ podcast.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- <div v-if="errors & errors.length">
      <div v-for="error of errors">
        <p>{{ error.message }}</p>
      </div>
    </div> -->
  <!-- </div> -->
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
