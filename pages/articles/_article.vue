<template>
  <div class="article">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <!-- title -->
      <div class="font-sans">
        <h1
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >
          {{ article.title }}
        </h1>

        <!-- <div class="px-6 pt-4 pb-2">
                <div v-for="tag in article.tag_list" :key="tag">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-smibold text-gray-700 mr-2 mb-2 tag"
                >
                    {{ tag }}
                </span>
                </div>
            </div> -->
        <p class="text-sm md:text-base font-normal text-gray-600">
          Published {{ article.readable_publish_date }}
        </p>
        <img :src="article.cover_image" />
      </div>

      <!-- article -->
      <div class="py-6 content" v-html="article.body_html" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      article: {},
    }
  },

  async mounted() {
    const res = await this.$axios.get(`/articles/${this.$route.params.article}`)
    this.article = res.data
  },
}
</script>

<style lang="scss" scoped>
.article {
  .content {
    text-align: justify;
    font-size: 16px;
  }
}
</style>
