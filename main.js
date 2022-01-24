const app = Vue.createApp({
    data() {
        return {
            image: './images/davinci_logo.png',
            first_number: '',
            second_number: '',
            answer: ''
        }
    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}`;
            return date;
        },
        calculate(first_number, second_number) {
            answer = first_number + second_number;
            return answer;
        }
    }
})