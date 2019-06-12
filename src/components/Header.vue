<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">VueJS Training</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/trader" activeClass="active" tag="li">
            <a>Trader</a>
          </router-link>
          <router-link to="/slayer" activeClass="active" tag="li">
            <a>Monster Slayer</a>
          </router-link>
          <router-link to="/quotes" activeClass="active" tag="li">
            <a>Quotes</a>
          </router-link>
          <router-link to="/login" activeClass="active" tag="li">
            <a>Authentication</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  }
};
</script>