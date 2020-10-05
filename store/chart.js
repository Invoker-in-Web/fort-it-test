
export const state = () => ({
  barChartData: {
    labels: [
      "Янв",
      "Фев",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сент",
      "Окт",
      "Ноя",
      "Дек",
    ],

    datasets: [
      {
        label: "Предстоящие",
        data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78],
        backgroundColor: "#4F6CFF",
        barThickness: 4,
      },
      {
        label: "В процессе",
        data: [30, 24, 57, 23, 68, 72, 25, 64, 37, 43, 85, 33],
        backgroundColor: "#FFBF00",
        barThickness: 6,
      },
      {
        label: "Завершенные",
        data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 37],
        backgroundColor: "lightgray",
        barThickness: 4,
      },
    ],
  },

  barChartOptions: {
    responsive: true,

    // не поддерживает кастомизацию на необходимом уровне

    legend: {
      display: false,
      // position: "bottom",
      labels: {
        boxWidth: 12,
      },
    },

    // не поддерживает кастомизацию на необходимом уровне

    title: {
      display: false,
      // text: ['Аналитика продаж', 'Активных 13 проектов'],
      // fontSize: 16,
      // fontColor: "black",
      // fontStyle: 'normal',
    },

    tooltips: {
      backgroundColor: "#17BF62",
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: "#a0a0a0",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: false,
            fontColor: "#a0a0a0",
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },

  infoPlate: [
    {
      name: 'Заказы',
      value: '1.7K',

    },
    {
      name: 'Распродажа',
      value: '24.2K',

    },
    {
      name: 'Онлайн',
      value: '17.7K',

    },
    {
      name: 'Общие',
      value: '43.6K',

    }
  ],

  selectedMonth: '',

  selectedType: '',

  selectedAction: '',

  actions: ['Добавить', 'Удалить'],

  valueToAdd: '',

})


export const mutations = {
  updateMonth(state, payload) {
    state.selectedMonth = payload
  },

  updateType(state, payload) {
    state.selectedType = payload
  },

  updateAction(state, payload) {
    state.selectedAction = payload
  },

  deleteValue(state, payload) {
    payload.currentDataset.data[payload.monthId] = 0
  },

  updateValueToAdd(state, payload) {
    state.valueToAdd = payload
  },

  addValue(state, payload) {
    payload.currentDataset.data[payload.monthId] =
      Number(payload.currentDataset.data[payload.monthId]) + Number(state.valueToAdd)


    payload.currentDataset.data[payload.monthId][0] === '0' ?
    Number(payload.currentDataset.data[payload.monthId]) :
    payload.currentDataset.data[payload.monthId]
  }
}

export const actions = {
  submitDeletion({commit, state}) {

    const monthId = state.barChartData.labels.findIndex(label => label === state.selectedMonth)

    const currentDataset = state.barChartData.datasets.find(dataset => dataset.label === state.selectedType)

    commit('deleteValue', {monthId, currentDataset})
  },

  addValue({commit, state}) {
    const monthId = state.barChartData.labels.findIndex(label => label === state.selectedMonth)

    const currentDataset = state.barChartData.datasets.find(dataset => dataset.label === state.selectedType)


    commit('addValue', {monthId, currentDataset})
  }
}

export const getters = {
  infoPlate: s => s.infoPlate,

  barChartData: s => s.barChartData,

  barChartOptions: s => s.barChartOptions,

  selectedMonth: s => s.selectedMonth,

  selectedType: s => s.selectedType,

  selectedAction: s => s.selectedAction,

  actions: s => s.actions


}