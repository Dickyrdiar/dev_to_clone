<template>
  <div class="video">
    <p>{{ video.video_duration_in_minutes }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['video']),
  },

  mounted() {
    this.getVideo(this.video_id)
    console.log(this.video)
  },

  methods: {
    ...mapActions(['getVideo']),
  },
}
</script>
