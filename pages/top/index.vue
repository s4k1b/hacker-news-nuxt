<template>
  <div class="container">
    <table class="table is-fullwidth is-hoverable has-text-centered mt-10">
      <tbody>
        <table-row v-for="item in hnList" :key="item" :item-id="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TableRow from '@/components/TableRow.vue'

export default {
  components: {
    TableRow
  },

  computed: {
    ...mapGetters(['hnList'])
  },

  async fetch({ store }) {
    await store.dispatch('hnList$fetch', 'topstories')
  }
}
</script>
