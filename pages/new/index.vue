<template>
  <div class="container">
    <pagination />
    <table class="table is-fullwidth is-hoverablehas-text-centered mt-20">
      <tbody>
        <table-row v-for="item in visibleList" :key="item" :item-id="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TableRow from '@/components/TableRow.vue'
import Pagination from '@/components/Pagination'
import filterList from '@/functions/filterList'

export default {
  components: {
    TableRow,
    Pagination
  },

  computed: {
    ...mapGetters(['hnList']),
    visibleList() {
      return (
        filterList.paginatedList(this.hnList, this.$route.query.page || 1) || []
      )
    }
  },

  async fetch({ store, query, error }) {
    if (query.page && query.page < 1)
      error({ statusCode: 404, message: 'You entered the wrong page query' })
    await store.dispatch('hnList$fetch', 'newstories')
    if (
      query.page &&
      query.page > parseInt(Math.ceil(store.state.hnList.length / 10))
    )
      error({ statusCode: 404, message: 'You entered the wrong page query' })
  }
}
</script>
