<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">User: {{ user.id || 'ID is loading ...' }}</h1>
        <h2 class="subtitle">
          Created: {{ user.created | dayDifference }} ago
          <br />
          Karma: {{ user.karma || '-' }}
        </h2>
        <div class="subtitle">
          <a :href="`https://news.ycombinator.com/submitted?id=${user.id}`"
            >submissions</a
          >
          |
          <a :href="`https://news.ycombinator.com/threads?id=${user.id}`"
            >comments</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['user'])
  },
  async fetch({ store, params }) {
    await store.dispatch('userDetails$api', params.id)
  }
}
</script>

<style></style>
