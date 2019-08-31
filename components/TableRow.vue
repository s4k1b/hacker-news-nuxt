<template>
  <tr>
    <td class="is-vcenered">
      <h1 class="has-text-primary has-text-weight-bold is-size-5 mt-10">
        {{ details.score || '-' }}
      </h1>
    </td>
    <td>
      <div class="title is-5">
        <a :href="details.url || `/item/${itemId}`">{{
          details.title || '-'
        }}</a>
      </div>
      <div class="subtitle is-6">
        <p>
          by
          <nuxt-link :to="`/user/${details.by}`">{{ details.by }}</nuxt-link>
          {{ details.time | dayDifference }} ago
          <template v-if="activeUrl !== 'jobs'"
            >|
            <nuxt-link :to="`/item/${itemId}`"
              >{{
                (details.kids && details.kids.length) || 0
              }}
              comments</nuxt-link
            >
          </template>
        </p>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    itemId: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      details: {}
    }
  },

  computed: {
    activeUrl() {
      return this.$route.fullPath.split('?')[0].split('/')[1]
    }
  },

  created() {
    this.getDetails()
  },

  methods: {
    async getDetails() {
      const url = `https://hacker-news.firebaseio.com/v0/item/${this.itemId}.json`
      try {
        const resp = await this.$axios.get(url)
        this.details = resp.data || {}
      } catch (e) {
        throw e
      }
    }
  }
}
</script>
