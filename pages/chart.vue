<template>
  <b-container>
    <b-row>
      <b-col>
        <!-- пользователь -->
        <b-row>
          <b-col>
            <div
              id="account"
              class="d-flex align-items-center justify-content-end"
            >
              <span> John Doe </span>

              <div
                id="account-icon--wrapper"
                class="d-flex justify-content-center mx-2 rounded-circle"
              >
                <AccountCircleOutline-icon class="text-primary" />
              </div>
            </div>
          </b-col>
        </b-row>

        <!-- график -->
        <b-row class="d-flex justify-content-center mt-3">
          <b-col lg="5" sm="8" cols="8">
            <!-- заголовок -->
            <b-row class="d-flex justify-content-between mb-2">
              <b-col cols="5">
                <h6>Аналитика продаж</h6>
                <small
                  >Активных
                  <span class="text-primary font-weight-bold">13 проектов</span>
                </small>
              </b-col>

              <b-col cols="5">
                <h5 class="d-flex justify-content-end">90</h5>

                <b-dropdown
                  text="Период"
                  variant="white"
                  class="border d-flex justify-content-end rounded bg-white"
                >
                  <template v-slot:button-content>
                    <CalendarMonth-icon class="text-primary" /> Период
                  </template>
                  <b-dropdown-item>Неделя</b-dropdown-item>
                  <b-dropdown-item>Месяц</b-dropdown-item>
                  <b-dropdown-item>Год</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>

            <!-- chart -->
            <bar-chart
              :data="$store.getters['chart/barChartData']"
              :options="$store.getters['chart/barChartOptions']"
              :height="200"
            />

            <!-- легенда -->
            <b-row class="d-flex justify-content-around flex-wrap">
              <b-col
                lg="5"
                md="5"
                sm="5"
                cols="5"
                class="text-break bg-white d-flex justify-content-center border border-dark rounded"
              >
                <div
                  class="legend-color position-absolute rounded"
                  id="legend-color--further"
                ></div>
                <small> Предстоящие </small>
              </b-col>

              <b-col
                lg="5"
                md="5"
                sm="5"
                cols="5"
                class="text-break bg-w d-flex justify-content-center border border-dark rounded"
              >
                <div
                  class="legend-color position-absolute rounded"
                  id="legend-color--process"
                ></div>
                <small> В процессе </small>
              </b-col>

              <b-col
                lg="5"
                md="5"
                sm="5"
                cols="5"
                class="text-break bg-white my-3 d-flex justify-content-center border border-dark rounded"
              >
                <div
                  class="legend-color position-absolute rounded"
                  id="legend-color--completed"
                ></div>
                <small> Завершенные </small>
              </b-col>
            </b-row>
          </b-col>

            <!-- плитка -->
          <b-col
            lg="5"
            md="9"
            sm="9"
            cols="9"
            class="d-flex flex-wrap justify-content-around align-items-between"
          >
            <b-col
              v-for="plate in $store.getters['chart/infoPlate']"
              :key="plate.name"
              class="d-flex flex-column plate border rounded text-break
                text-white justify-content-center align-items-center bg-primary
                py-lg-0 py-2"
              cols="5"
            >
              <h5 class="d-lg-block d-none">{{ plate.name }}</h5>
              <small class="d-lg-none d-block">{{plate.name}}</small>

              <h4 class="d-lg-block d-none">{{ plate.value }}</h4>
              <small class="d-lg-none d-block">{{plate.value}}</small>

              <small>Подробнее</small>
            </b-col>
          </b-col>
        </b-row>

        <!-- картинки -->
        <b-row class="d-flex justify-content-center flex-wrap my-3">
          <b-col
            cols="7"
            lg="5"
            class="border mr-lg-3 mb-3 mb-lg-0 border-dark bg-white rounded"
          >
            <div id="map-block">
              <div class="mb-4 mt-2">На карте</div>

              <img src="~/assets/map.jpg" alt="Карта Мира" id="map_pic" />
            </div>
          </b-col>

          <b-col
            cols="7"
            lg="4"
            class="border border-dark bg-white rounded"
          >
            <div id="help-block" class="d-flex flex-column">
              <img
                class="align-self-center"
                src="~/assets/help_pict.jpg"
                alt="Картинка 'Нужна помощь' "
                id="help_pic"
              />

              <div
                class="d-flex mb-3 flex-column mt-1 ml-3 justify-content-start"
              >
                <p class="h6">Нужна помощь?</p>

                <small class="text-muted">
                  Есть ли у вас проблемы при использовании программы?
                </small>
                <nuxt-link to="help">
                  <button type="button" class="mt-2 btn btn-primary">
                    Пишите нам
                  </button>
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
#account-icon--wrapper {
  background-color: lightblue;
  width: 2em;
  height: 2em;
}

#calendar-icon {
  top: 25%;
  left: 5%;
  z-index: 99999;
}

.legend-color {
  width: 0.5em;
  height: 0.5em;
  top: 40%;
  left: 0.3em;
}

#legend-color--further {
  background-color: #4f6cff;
}

#legend-color--process {
  background-color: #ffbf00;
}

#legend-color--completed {
  background-color: lightgray;
}


.plate {
  height: 40%;
}

#map-block {
  img {
    width: 100%;
  }
}

#help-block {
  img {
    width: 70%;
  }
}

</style>