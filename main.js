const app = Vue.createApp({
    data() {
        return {
            image: './images/davinci_logo.png',
            first_number: '',
            answer: 0
        }
    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}`;
            return date;
        },
        calculate(first_number) {
            this.answer += first_number;
            return this.answer;

        }
    }
})