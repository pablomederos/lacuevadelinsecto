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
        .then( _ => 
          footerIntersectionObserver())
    }
  },
  created() {
    this.getRepoData()
  },
}).mount('#app')

const footerIntersectionObserver = () => {

  const elementObserver = document.querySelector('.appBody')
  let options = {
    root: elementObserver,
    rootMargin: '0px',
    threshold: 0.1
  }
  
  let observer = new IntersectionObserver(footerIntersectionObserverCallback, options);

  const targets = document.querySelectorAll("div.videos")
  
  Array.from(targets)?.forEach(target => observer.observe(target))
}

const footerIntersectionObserverCallback = (entries, observer) => {

  const footer = document.querySelector("footer")

  if(entries?.length)
  {
    entries.forEach( entry => {
      
      if(entry.isIntersecting) {
        if(footer?.classList.contains("show"))
          footer?.classList.remove("show")
      }
      else {
        if(!footer?.classList.contains("show"))
          footer?.classList.add("show")
      }
    })
  }
}