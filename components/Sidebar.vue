<template>
  <b-navbar
    style="background-color: #1e2933; height: 100%"
    class="flex-column justify-content-between pl-4"
  >

  <b-button id="close-sidebar"
    variant="secondary"
    class="position-absolute d-md-none d-flex"
    @click="$store.dispatch('sidebar/changeSidebarVisibility')"
  >
    x
  </b-button>

    <div style="width: 100%">
      <img src="~/assets/logo.png" alt="fort logo" style="width: 100%" />

      <hr style="background-color: white" />

      <div>
        <b-nav pills class="flex-column">
          <b-nav-text class="text-light mb-2">МЕНЮ</b-nav-text>
          <b-nav-item
            to="/"
            link-classes="text-white"
            @click="activeNavItem = 'home'"
            :active="activeNavItem === 'home'"
          >
            <Home-icon /> &nbsp; Домой
          </b-nav-item>

          <b-nav-item
            to="/data"
            link-classes="text-white"
            @click="activeNavItem = 'data'"
            :active="activeNavItem === 'data'"
          >
            <ViewDashboardOutline-icon /> &nbsp;Данные
          </b-nav-item>

          <b-nav-item
            to="chart"
            link-classes="text-white"
            @click="activeNavItem = 'chart'"
            :active="activeNavItem === 'chart'"
          >
            <CurrencyUsd-icon />&nbsp;График
          </b-nav-item>

          <b-nav-item
            to="extentions"
            link-classes="text-white"
            @click="activeNavItem = 'extentions'"
            :active="activeNavItem === 'extentions'"
          >
            <AccountCircleOutline-icon /> &nbsp;Расширения
          </b-nav-item>

          <b-nav-item
            to="design"
            link-classes="text-white"
            @click="activeNavItem = 'design'"
            :active="activeNavItem === 'design'"
          >
            <Pencil-icon />&nbsp;Дизайн
          </b-nav-item>

          <b-nav-item
            to="customers"
            link-classes="text-white"
            @click="activeNavItem = 'customers'"
            :active="activeNavItem === 'customers'"
          >
            <AccountTie-icon />&nbsp;Покупатели
          </b-nav-item>
        </b-nav>
      </div>
    </div>

    <div style="width: 100%">
      <b-nav pills class="flex-column mb-3">
        <b-nav-text class="text-light mb-2">ПОДДЕРЖКА</b-nav-text>
        <b-nav-item
          link-classes="text-white"
          to="/help"
          @click="activeNavItem = 'help'"
          :active="activeNavItem === 'help'"
        >
          <HelpCircleOutline-icon /> &nbsp; Нужна помощь?
        </b-nav-item>

        <b-nav-item
          link-classes="text-white"
          to="contacts"
          @click="activeNavItem = 'contacts'"
          :active="activeNavItem === 'contacts'"
        >
          <CardAccountPhone-icon /> &nbsp; Контакты
        </b-nav-item>
      </b-nav>

      <b-nav-text class="text-light">SETTINGS</b-nav-text>

      <b-nav pills class="nav flex-column my-2">
        <b-nav-item
          link-classes="text-white"
          to="settings"
          @click="activeNavItem = 'settings'"
          :active="activeNavItem === 'settings'"
        >
          <CogOutline-icon /> &nbsp; Настройки
        </b-nav-item>

        <b-nav-item
          link-classes="text-white"
          to="themes"
          @click="activeNavItem = 'themes'"
          :active="activeNavItem === 'themes'"
        >
          <MoonWaningCrescent-icon /> &nbsp; Темы
        </b-nav-item>

        <b-nav-item
          link-classes="text-white"
          to="logout"
          @click="activeNavItem = 'logout'"
          :active="activeNavItem === 'logout'"
        >
          <LoginVariant-icon /> &nbsp; Выйти
        </b-nav-item>
      </b-nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      activeNavItem: "home",
    };
  },
};
</script>

<style lang="scss">
#sidebar {
  font-size: 0.9em;
  height: 100%;

  #close-sidebar {
    top: 5px;
    right: 5px;
    height: 2em;
    display: flex;
    align-items: center;
  }
}
</style>