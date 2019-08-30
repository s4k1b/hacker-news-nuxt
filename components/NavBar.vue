<template>
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="@/assets/hn-logo.png" />
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/top" class="navbar-item">
          Top
        </nuxt-link>

        <nuxt-link to="/new" class="navbar-item">
          New
        </nuxt-link>

        <nuxt-link to="/show" class="navbar-item">
          Show
        </nuxt-link>

        <nuxt-link to="/ask" class="navbar-item">
          Ask
        </nuxt-link>

        <nuxt-link to="/jobs" class="navbar-item">
          Jobs
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          Built with Nuxt.js
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
