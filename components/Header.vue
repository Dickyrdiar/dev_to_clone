<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style lang="scss" scoped></style>
