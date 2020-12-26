<template>
  <div class="header">
    <header class="max-w-5xl mx-auto pt-5">
      <div class="flex flex-wrap -mx-2 overflow-hidden px-5 lg:px-2 my-2">
        <div
          class="px-2 w-full overflow-hidden md:w-1/6 xl:w-1/3 text-center md:text-left"
        >
          <h1 class="font-bold text-2xl font-sherif" href="#">WorkFlow</h1>
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

            <li class="inline-block">
              <a class="block font-semibold px-3" href="#">Article</a>
            </li>
          </ul>
        </nav>

        <div
          class="my-2 px-2 w-full overflow-hidden md:w-2/6 lg:w-1/3 text-center md:text-right"
        >
          <div class="relative mx-auto text-gray-600 lg:block hidden">
            <input
              class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
              <svg
                id="Capa_1"
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  // position: fixed;
}
</style>
