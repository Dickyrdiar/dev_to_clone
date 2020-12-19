<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <!-- title -->
    <div class="font-sans">
      <h1
        class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
      >
        {{ article.title }}
      </h1>
      <p class="text-sm md:text-base font-normal text-gray-600">
        Published {{ article.readable_publish_date }}
      </p>
      <img :src="article.cover_image" />
    </div>

    <p class="py-6">{{ article.description }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      article: {},
    }
  },

  created() {
    axios
      .get(`https://dev.to/api/articles/${this.$route.params.article}`)
      .then((res) => {
        this.article = res.data
      })
  },
}
</script>
