const { createApp } = Vue

createApp({
  data() {
    return {
      routesPath: "https://pequenasideas.uy/lcdi/index.json",
      repos: undefined
    }
  },
  methods: {
    getRepoData() {
        fetch(this.routesPath)
        .then(response => response.json())
        .then(data => this.repos = data)
    }
  },
  created() {
    this.getRepoData()
  }
}).mount('#app')