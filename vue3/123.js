import { createApp, ref } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js"
const app = createApp({
    setup() {
        const text = ref("hello world");


        return {
            text
        }
    }
});
app.mount("#app")