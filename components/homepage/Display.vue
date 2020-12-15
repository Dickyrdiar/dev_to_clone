<template>
  <div class="display-posts">
    <div class="md:container md:mx-auto">
      <div v-for="article in articles" :key="article.id">
        <article class="overflow-hidden rounded shadow-lg card">
          <header class="flex items- justify-betweb leading-tight p-2 md:p-4">
            <h2 class="text-lg">
              <a class="no-underline hover:underline text-black">
                <img :src="article.cover_image" />
                {{ article.title }}
              </a>
            </h2>
          </header>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: [],
    }
  },

  created() {
    axios.get('https://dev.to/api/articles').then((res) => {
      this.articles = res.data
    })
  },
}
</script>

<style lang="scss" scoped>
.display-posts {
  margin-top: 7rem;
  .card {
    width: 20rem;
    height: 13rem;
    float: left;
    margin-left: 4rem;
    margin-top: 3rem;
  }
}
</style>
