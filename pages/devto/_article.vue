<template>
  <div class="display-article">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <!--Title-->
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

        <!--Post Content-->
        <p class="article py-6 mt-5" v-html="article.body_html"></p>
        <!--/ Post Content-->
      </div>

      <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

      <div class="flex w-full items-center font-sans px-4 py-12">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-base font-bold text-base md:text-xl leading-none mb-2">
            Jo Bloggerson
          </p>
          <p class="text-gray-600 text-xs md:text-base">
            Minimal Blog Tailwind CSS template by
            <a
              class="text-green-500 no-underline hover:underline"
              href="https://www.tailwindtoolbox.com"
              >TailwindToolbox.com</a
            >
          </p>
        </div>
        <div class="justify-end">
          <button
            class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
          >
            Read More
          </button>
        </div>
      </div>

      <hr class="border-b-2 border-gray-400 mb-8 mx-4" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['article']),
  },

  mounted() {
    this.getArticle(this.$route.params.article)
    console.log(this.article)
  },

  methods: {
    ...mapActions(['getArticle']),
  },
}
</script>
