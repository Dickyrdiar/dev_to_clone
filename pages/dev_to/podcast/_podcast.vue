<template>
  <div class="podcast_episode">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <!-- title -->
      <div class="font-sans">
        <h3
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >
          {{ podcast.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      podcast: {},
    }
  },

  async mounted() {
    const res = await this.$axios.get(
      `/podcast_episodes/${this.$route.params.podcast}`
    )
    this.podcast = res.data
  },
}
</script>
