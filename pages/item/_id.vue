<template>
  <div>
    <details-header />
    <div class="comment-section">
      <comment-section :kids="details.kids" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DetailsHeader from '@/components/DetailsHeader'
import CommentSection from '@/components/CommentSection'

export default {
  components: {
    DetailsHeader,
    CommentSection
  },
  computed: {
    ...mapGetters(['details'])
  },
  async fetch({ store, params }) {
    await store.dispatch('details$api', params.id)
  }
}
</script>

<style></style>
