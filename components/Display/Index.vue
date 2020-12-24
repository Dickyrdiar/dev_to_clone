<template>
  <div class="display-posts">
    <div class="md:container md:mx-auto">
      <div v-if="error">
        {{ error }}
      </div>

      <div v-for="article in articles" :key="article.id">
        <article class="overflow-hidden rounded shadow-lg card">
          <header class="flex items- justify-betweb leading-tight p-2 md:p-4">
            <h2 class="text-lg">
              <a class="no-underline hover:underline text-black">
                <img :src="article.cover_image" />
              </a>
            </h2>
          </header>

          <section class="flex items- justify-betweb leading-tight p-2 md:p-4">
            <p class="no-underline hover:underline text-black">
              <nuxt-link :to="`/articles/` + article.id">{{
                article.title
              }}</nuxt-link>
            </p>
          </section>

          <footer>
            <div class="px-6 pt-4 pb-2">
              <div v-for="tag in article.tag_list" :key="tag" class>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      allArticles: [],
      limit: 6,
      error: null,
    }
  },

  async mounted() {
    try {
      const res = await this.$axios.get('/articles')
      this.articles = res.data
    } catch (error) {
      this.error = error
    }
  },

  methods: {
    loadMore() {
      this.articles = []
      this.current += 9
      this.allArticles.map((item) =>
        item.description !== null && this.articles.length < this.current
          ? this.articles.push(item)
          : ''
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.display-posts {
  margin-top: 7rem;
  .card {
    width: 22rem;
    height: 24rem;
    float: left;
    margin-left: 3rem;
    margin-top: 2rem;
    .tag {
      float: left;
    }
  }
}
</style>
