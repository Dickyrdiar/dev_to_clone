<template>
  <div class="videos">
    <main class="max-w-5xl mx-auto pb-10 pt-10">
      <div class="flex flex-wrap overflow-hidden">
        <div class="mr-2 md:mr-4 ml-2">
          <div class="pb-10">
            <div class="video-container">
              <iframe
                width="640"
                height="360"
                :src="video.cloudinary_video_url"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      video: {},
    }
  },

  async mounted() {
    const res = await this.$axios.get(`/videos/${this.$route.params.video}`)
    this.video = res.data
  },
}
</script>
