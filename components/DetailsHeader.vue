<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ details.title || 'Title is loading ...' }}
        </h1>
        <h2 class="subtitle">
          {{ details.score || '-' }} points | by
          <nuxt-link :to="`/user/${details.by}`">{{ details.by }}</nuxt-link>
          {{ details.time | dayDifference }} ago
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: { ...mapGetters(['details']) }
}
</script>

<style></style>
