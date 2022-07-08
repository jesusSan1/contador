const app = Vue.createApp({
    data() {
        return {
            texto: '',
            caracteres: 0,
            palabras: 0
        }
    },
    methods: {
        contar() {
            this.texto = this.texto.toLowerCase()
            this.caracteres = this.texto.length
            this.palabras = this.texto.split(' ').length
            if (this.caracteres == 0) {
                this.palabras = 0
            }
        },
        limpiar() {
            this.texto = ''
            this.caracteres = 0
            this.palabras = 0
        }
    }
})
app.mount("#app")