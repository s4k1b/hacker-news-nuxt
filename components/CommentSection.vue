<template>
  <ul class="comment-wrapper">
    <single-comment v-for="kid in kids" :key="kid" :comment-id="kid" />
  </ul>
</template>

<script>
import SingleComment from '@/components/SingleComment'

export default {
  components: {
    SingleComment
  },
  props: {
    kids: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
