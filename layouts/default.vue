<template>
  <div class="position-absolute bg-light" id="app-wrapper">
    <no-ssr>
      <b-row style="height: 100%">
        <b-col class="d-lg-flex position-absolute" style="height: 100%">
          <Sidebar
            id="sidebar"
            class="d-lg-flex"
            :class="{ 'd-none': $store.getters['sidebar/isSidebarVisible'] }"
          />
        </b-col>

        <b-col id="main-content">
          <b-button
            id="toggle-btn"
            class="d-flex position-fixed justify-content-around d-lg-none"
            @click="$store.dispatch('sidebar/changeSidebarVisibility')"
          >
            <ReorderHorizontal-icon />
          </b-button>

          <Nuxt class="mt-5" id="nuxt-content" />
        </b-col>
      </b-row>
    </no-ssr>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
#app-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    overflow-y: scroll;
  }

  #toggle-btn {
    right: 2em;
    top: 1em;
  }

  #sidebar {
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    background-color: #1e2933;
  }

  #main-content {
    margin-left: 300px;
    width: calc(100% - 300px);
    background-color: "#edeaea";
  }

  #nuxt-content {
    // max-width: calc(100% - 310px);
    overflow: hidden;
  }

  @media screen and (max-width: 992px) {
    #main-content {
      margin-left: 0;
    }
  }
}
</style>