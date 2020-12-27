<template>
  <div class="header">
    <header class="max-w-5xl mx-auto pt-5">
      <div class="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-2 my-2">
        <div
          class="px-2 w-full overflow-hidden md:w-1/6 xl:w-1/3 text-center md:text-left"
        >
          <h1 class="font-bold text-2xl font-sherif">
            <a href="/">WorkFlow </a>
          </h1>
        </div>

        <nav
          class="my-2 px-2 w-full oferflow-hidden md:w-3/6 lg:w1/3 xl:w-1/3 text-center md:text-left"
        >
          <ul>
            <li class="inline-block">
              <a class="block font-semibold px-3" href="/Videos">Videos</a>
            </li>

            <li class="inline-block">
              <a class="block font-semibold px-3" href="/Podcast">Podcast</a>
            </li>

            <!-- <li class="inline-block">
              <a class="block font-semibold px-3" href="#">Article</a>
            </li> -->
          </ul>
        </nav>

        <div
          class="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 text-center md:text-right"
        >
          <Search />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    }
  },

  mounted() {
    this.tick
  },
}
</script>

<style lang="scss" scoped>
.header {
  // position: fixed;
}
</style>
