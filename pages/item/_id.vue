<template>
  <div><details-header /></div>
</template>

<script>
import DetailsHeader from '@/components/DetailsHeader'

export default {
  components: {
    DetailsHeader
  },
  async fetch({ store, params }) {
    await store.dispatch('details$api', params.id)
  }
}
</script>

<style></style>
