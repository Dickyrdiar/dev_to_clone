<template>
  <div class="video">
    <video>
      <source :src="video.video_source_url" type="video" />
    </video>
    <p>{{ video.title }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['video']),
  },

  mounted() {
    this.getVideo(this.$route.params.video)
    console.log(this.video)
  },

  methods: {
    ...mapActions(['getVideo']),
  },
}
</script>
