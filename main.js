const app = Vue.createApp({
    data() {
        return {
            image: './images/davinci_logo.png'
        }
    },
methods: {
    currentDate() {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}`;
        return date;
      }
    }
})