<template>
  <li class="single-comment">
    <div class="comment-info">
      <nuxt-link :to="`/user/${commentDetails.by}`">{{
        commentDetails.by
      }}</nuxt-link>
      {{ commentDetails.time | dayDifference }} ago
    </div>
    <span v-html="commentDetails.text"></span>
    <comment-section :kids="commentDetails.kids" />
  </li>
</template>

<script>
import CommentSection from '@/components/CommentSection'

export default {
  components: {
    CommentSection
  },

  props: {
    commentId: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      commentDetails: {}
    }
  },

  watch: {
    commentId(newVal) {
      this.getDetails(newVal)
    }
  },

  created() {
    this.getDetails(this.commentId)
  },

  methods: {
    async getDetails(id) {
      try {
        const resp = await this.$axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        )
        this.commentDetails = resp.data || {}
      } catch (e) {
        throw e
      }
    }
  }
}
</script>

<style></style>
