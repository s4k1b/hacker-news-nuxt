<template>
  <nav
    class="pagination is-centered is-rounded hn-pagination"
    role="navigation"
    aria-label="pagination"
  >
    <nuxt-link
      :to="getPath(activePageNo - 1)"
      class="pagination-previous"
      :disabled="activePageNo === 1"
      :event="activePageNo === 1 ? '' : 'click'"
      >Previous</nuxt-link
    >
    <nuxt-link
      :to="getPath(activePageNo + 1)"
      class="pagination-next"
      :disabled="activePageNo === totalNoOfPage"
      :event="activePageNo === totalNoOfPage ? '' : 'click'"
      >Next page</nuxt-link
    >
    <ul class="pagination-list">
      <li v-for="(page, idx) in visiblePageArray" :key="`${page}-${idx}`">
        <span v-if="page === '...'" class="pagination-ellipsis">&hellip;</span>
        <nuxt-link
          v-else
          :to="getPath(page)"
          class="pagination-link"
          :class="{ 'is-current': activePageNo === page }"
          :aria-label="`Goto page ${page}`"
          >{{ page }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['hnList']),
    totalNoOfPage() {
      return parseInt(Math.ceil(this.hnList.length / 10))
    },
    activePageNo() {
      return parseInt(this.$route.query.page) || 1
    },
    visiblePageArray() {
      if (this.totalNoOfPage >= 7) {
        const arr = [1]
        if (this.activePageNo < 3) {
          arr.push(2)
          arr.push('...')
          const mid = parseInt((this.totalNoOfPage + 1) / 2)
          arr.push(mid - 1)
          arr.push(mid)
          arr.push(mid + 1)
          arr.push('...')
        } else if (this.activePageNo > this.totalNoOfPage - 2) {
          arr.push('...')
          const mid = parseInt((this.totalNoOfPage + 1) / 2)
          arr.push(mid - 1)
          arr.push(mid)
          arr.push(mid + 1)
          arr.push('...')
          arr.push(this.totalNoOfPage - 1)
        } else {
          arr.push('...')
          arr.push(this.activePageNo - 1)
          arr.push(this.activePageNo)
          arr.push(this.activePageNo + 1)
          arr.push('...')
        }
        arr.push(this.totalNoOfPage)
        return arr
      } else {
        const arr = []
        for (let i = 1; i <= this.totalNoOfPage; i++) {
          arr.push(i)
        }
        return arr
      }
    }
  },
  methods: {
    getPath(page) {
      let fullPath = this.$route.fullPath
      fullPath = fullPath.split('?')[0]
      return `${fullPath}?page=${page}`
    }
  }
}
</script>

<style></style>
