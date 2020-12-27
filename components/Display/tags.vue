<template>
  <div class="tags">
    <main class="max-w-5xl mx-auto pb-10 pt-10">
      <div class="flex flex-warp overflow-hidden mx-24">
        <div v-for="tag in tags" :key="tag.id">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tag"
            ><p>{{ tag.name }}</p></span
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    }
  },

  async mounted() {
    const res = await this.$axios.get('/tags')
    this.tags = res.data
  },
}
</script>
