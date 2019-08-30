<template>
  <tr>
    <td class="is-vcenered">
      <h1 class="has-text-primary has-text-weight-bold is-size-5 mt-10z">
        {{ details.score || '-' }}
      </h1>
    </td>
    <td>
      <div class="title is-5">
        <nuxt-link :to="details.url || '-'">{{
          details.title || '-'
        }}</nuxt-link>
      </div>
      <div class="subtitle is-6">
        <p>
          by <nuxt-link :to="`/user/${details.by}`">{{ details.by }}</nuxt-link>
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
