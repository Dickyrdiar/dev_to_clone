<template>
  <div class="index mx-11 text-right bg-gray-100">
    <div class="container md:mx-auto text-center">
      <div v-for="article in articles" :key="article.id" :article="article">
        <article
          class="overflow-hidden rounded shadow-lg md:my-12 mx-5 mt-6 card"
        >
          <header class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <h3 class="text-md">
              <a
                class="w-32 h-32 md:w-48 md:h-auto md:rouded-non rounded-full mx-auto"
              >
                <!-- <img :src="article.cover_image" /> -->
                <div v-if="article.cover_image < 0">
                  <img src="~/assets/images/download.png" />
                </div>

                <div v-else>
                  <img :src="article.cover_image" />
                </div>
              </a>
            </h3>
          </header>

          <section class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <p class="no-underline hover:underline text-black">
              <nuxt-link :to="`/devto/` + article.id">{{
                article.title
              }}</nuxt-link>
            </p>
          </section>

          <footer>
            <div class="px-6 pb-2 pt-4">
              <div v-for="tag in article.tag_list" :key="tag">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tag"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['articles']),
  },

  mounted() {
    this.getArticles()
    console.log(this.articles)
  },

  methods: {
    ...mapActions(['getArticles']),
  },
}
</script>

<style lang="scss" scoped>
.index {
  .card {
    width: 20rem;
    height: 24rem;
    float: left;
    margin-left: 3rem;
    .tag {
      float: left;
    }
  }
}
</style>
