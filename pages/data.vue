<template>
  <b-container class="d-flex flex-column">
    <b-row class="m-3">
      <b-col>
        <!-- месяц -->
        <b-row class="mb-md-4">
          <b-col class="mb-sm-3" lg="5" md="5" sm="8" cols="8">
            <div class="mb-2">Выберите Месяц</div>

            <b-form-input
              class="mb-2"
              list="month-list"
              v-model="selectedMonth"
            ></b-form-input>

            <datalist id="month-list">
              <option
                v-for="option in $store.getters['chart/barChartData'].labels"
                :key="option"
              >
                {{ option }}
              </option>
            </datalist>
            Выбран: {{ $store.getters["chart/selectedMonth"] }}
          </b-col>

          <!-- тип -->
          <b-col
            class="mb-sm-3 mt-2 mt-md-0"
            lg="5"
            md="5"
            sm="8"
            cols="8"
            v-show="$store.getters['chart/selectedMonth']"
          >
            <div class="mb-2">Выберите Тип Данных</div>

            <b-form-input
              class="mb-2"
              list="types-list"
              v-model="selectedType"
            ></b-form-input>

            <datalist id="types-list">
              <option v-for="option in dataTypes" :key="option">
                {{ option }}
              </option>
            </datalist>

            Выбран: {{ $store.getters["chart/type"] }}
          </b-col>
        </b-row>

        <!-- действие -->
        <b-row>
          <b-col
            lg="5"
            md="5"
            sm="8"
            cols="8"
            class="mt-2 mt-md-0"
            v-show="$store.getters['chart/selectedType']"
          >
            <div class="mb-2">Выберите Действие</div>

            <b-form-input
              class="mb-2"
              list="actions-list"
              v-model="selectedAction"
            ></b-form-input>

            <datalist id="actions-list">
              <option
                v-for="option in $store.getters['chart/actions']"
                :key="option"
              >
                {{ option }}
              </option>
            </datalist>

            Выбран: {{ $store.getters["chart/selectedAction"] }}
          </b-col>

          <!-- значение -->
          <b-col
            lg="5"
            md="5"
            sm="8"
            cols="8"
            class="mt-md-0 mt-3"
            v-if="$store.getters['chart/selectedAction'] === 'Добавить'"
          >
            <div class="mb-2">Введите значение</div>

            <b-form-input class="mb-3" type="text" v-model="valueToAdd" />

            <b-button
              variant="primary"
              @click="$store.dispatch('chart/addValue')"
              >Добавить</b-button
            >
          </b-col>

          <b-col
            lg="5"
            md="5"
            sm="8"
            cols="8"
            class="mt-3 mt-md-0"
            v-if="$store.getters['chart/selectedAction'] === 'Удалить'"
          >
            <div class="mb-2">Вы уверены?</div>

            <b-button
              variant="primary"
              @click="$store.dispatch('chart/submitDeletion')"
            >
              Подтвердить удаление
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

<b-row id="home-link" class="mt-5">
    <nuxt-link to="/">Домой</nuxt-link>
</b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    const dataTypes = this.$store.getters["chart/barChartData"].datasets.map(
      (type) => type.label
    );

    return {
      dataTypes,
    };
  },

  methods: {},

  computed: {
    selectedMonth: {
      get() {
        return this.$store.getters["chart/selectedMonth"];
      },

      set(val) {
        this.$store.commit("chart/updateMonth", val);
      },
    },

    selectedType: {
      get() {
        return this.$store.getters["chart/selectedType"];
      },

      set(val) {
        this.$store.commit("chart/updateType", val);
      },
    },

    selectedAction: {
      get() {
        return this.$store.getters["chart/action"];
      },

      set(val) {
        this.$store.commit("chart/updateAction", val);
      },
    },

    valueToAdd: {
      get() {
        return this.$store.getters["chart/valueToAdd"];
      },

      set(val) {
        this.$store.commit("chart/updateValueToAdd", val);
      },
    },
  },
};
</script>
