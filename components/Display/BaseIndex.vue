<template>
  <div class="index">
    <div class="md:container md:mx-auto text-center">
      <div v-for="article in articles" :key="article.id">
        <article class="overflow-hidden rounded shadow-lg md:my-8 mx-5 card">
          <header class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <h3 class="text-md">
              <a
                class="w-32 h-32 md:w-48 md:h-auto md:rouded-non rounded-full mx-auto"
              >
                <img :src="article.cover_image" />
              </a>
            </h3>
          </header>

          <section class="flex items-justify-betweb leading-tight p-2 md:p-4">
            <p class="no-underline hover:underline text-black">
              {{ article.title }}
            </p>
          </section>

          <footer>
            <div class="px-6 pb-2 w-32">
              <div v-for="tag in article.tag_list" :key="tag">
                <span
                  class="inline-block py-1 text-sm font-semibold text-gray-400"
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
import { mapState } from 'vuex'

export default {
  computed: mapState(['articles']),
  mounted() {
    this.$store.dispatch('loadData')
  },
}
</script>

<style lang="scss" scoped>
.index {
  .card {
    width: 22rem;
    height: 19rem;
    float: left;
  }
}
</style>
