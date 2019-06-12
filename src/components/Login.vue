<template>
    <v-content>
        <v-container fluid pa-0>
            <v-layout row wrap>
                <v-flex xs12 sm4 id="sign-in-text-wrapper">
                    <v-layout column align-center justify-center fill-height pa-3>
                        <div class="login-wrapper text-xs-center mb-3">
                            <div class="display-1 font-weight-black mb-3">Добро пожаловать!</div>	<span class="subheading">Чтобы сохранять все ваши операции пожалуйста, войдите</span>
                        </div>
                        <v-btn round outline large dark ripple id="sign-in">Войти</v-btn>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm8 id="sign-up-form-wrapper" class="active">
                    <v-layout column align-center justify-center pa-3 mt-5>
                        <v-flex xs12 mb-3 mt-5>
                            <div class="login-wrapper text-xs-center">
                                <div class="display-1 font-weight-black">Создание учетной записи</div>
                            </div>
                        </v-flex>
                        <v-flex xs12 mb-3>
                            <v-btn outline fab small color="blue-grey lighten-4">
                                <v-icon color="grey darken-4">whatshot</v-icon>
                            </v-btn>
                            <v-btn outline fab small color="blue-grey lighten-4">
                                <v-icon color="grey darken-4">notifications</v-icon>
                            </v-btn>
                            <v-btn outline fab small color="blue-grey lighten-4">
                                <v-icon color="grey darken-4">school</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 mb-2>	<span class="grey--text text--lighten-1">используйте email для  регистрации</span>
                        </v-flex>
                        <v-flex xs12 class="form-wrapper">
                            <v-text-field box full-width single-line label="Name"></v-text-field>
                            <v-text-field box full-width single-line label="Email"></v-text-field>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :type="show1 ? 'text' : 'password'" box full-width single-line label="Password" background-color="#f4f8f7" color="grey darken-2" prepend-inner-icon="mdi-lock-outline" @click:append="show1 = !show1"></v-text-field>
                        </v-flex>
                        <v-btn round large dark ripple color="teal" id="sign-up" @click="show = !show">Зарегистрироваться</v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Login", data: () => ({
            dialog: false,
            selected: [],
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {text: 'Calories', value: 'calories'},
                {text: 'Fat (g)', value: 'fat'},
                {text: 'Carbs (g)', value: 'carbs'},
                {text: 'Protein (g)', value: 'protein'},
                {text: 'Actions', value: 'name', sortable: false}
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,

            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            }
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },

        watch: {
            dialog(val) {
                val || this.close()
            }
        },

        created() {
            this.initialize()
        },
        mounted() {
            alert("moutned")
        },

        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        status: 0
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        status: 1
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        status: 1
                    },
                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>

<style scoped>
    .container {
        min-height: 530px;
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(253deg,#40b09b 0,#3fb493 100%);
        color: white;
    }

    .form-wrapper {
        min-width: 50%;
    }

    .layout.wrap {
        height: 100vh;
    }

    .active {
        background: #fff;
        color: #40ae9f;
    }

    #sign-in {
        width: 60%;
    }

    #sign-up {
        min-width: 25%;
    }

    .form-wrapper .v-input__control > .v-input__slot {
        background: rgba(244,248,247,1);
    }

    .form-wrapper .v-text-field.v-text-field--enclosed .v-text-field__details {
        margin-bottom: 0px;
        height: 0px;
    }
</style>