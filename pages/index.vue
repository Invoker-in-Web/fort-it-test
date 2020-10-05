<template>
  <div>
    <ul>
      <li>
        Раздел
        <nuxt-link to="data">Данные</nuxt-link>
        в Меню отвечает за редактирование исходных данных
      </li>
      <li>Раздел <nuxt-link to='chart'>График</nuxt-link> - за отображение Данных</li>
      <li>Остальные разделы заполнены заглушками (простой текст)</li>

    </ul>
  </div>
</template>

<script>
export default {};
</script>