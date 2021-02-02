<template>
  <div class="header">
    <header class="max-w-5xl mx-auto pt-5">
      <div class="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-2 my-2">
        <div
          class="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/3 xl:w-1/3 text-center md:text-left"
        >
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
            href="/"
          />
        </div>

        <nav
          class="my-2 px-2 w-full overflow-hidden md:w-3/6 lg:w-1/3 xl:w-1/3 text-center md:text-left"
        >
          <ul>
            <li class="inline-block">
              <a class="block font-semibold px-3" href="/">Home</a>
            </li>
            <li class="inline-block">
              <a class="block font-semibold px-3" href="#">Podcast</a>
            </li>
            <li class="inline-block">
              <a class="block font-semibold px-3" href="/videos">Video</a>
            </li>
          </ul>
        </nav>

        <div
          class="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 xl:w-1/3 text-center md:text-right"
        >
          <BaseSearch />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import BaseSearch from './Display/atoms/BaseSearch.vue'
export default {
  components: { BaseSearch },
}
</script>

<style lang="scss" scoped></style>
