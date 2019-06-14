<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex>
                    <v-toolbar flat>
                        <v-toolbar-title>Акции</v-toolbar-title>
                        <v-divider
                                class="mx-2"
                                inset
                                vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <v-btn slot="activator" color="grey" class="mb-2">Добавить акцию</v-btn>
                            <v-btn slot="activator" color="grey" class="mb-2">Обновить магазин акций</v-btn>
                            <v-btn slot="activator" color="grey" class="mb-2">Перейти на следующий день</v-btn>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container grid-list-md>
                                        <v-layout wrap>
                                            <v-flex xs12 sm6 md4>
                                                <v-text-field v-model="editedItem.login" label="Логин"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                                <v-text-field v-model="editedItem.password" label="Пароль"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                                <v-text-field v-model="editedItem.fullname" label="ФИО"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                                <v-text-field v-model="editedItem.country" label="Страна"></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="close">Отменить</v-btn>
                                    <v-btn color="blue darken-1" flat @click="save">Сохранить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                    <v-data-table
                            :headers="headers"
                            :items="desserts"
                            class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.company }}</td>
                            <td class="text-xs-center">{{ props.item.currentPrice }}</td>
                            <td class="text-xs-center">{{ props.item.maximumPrice }}</td>
                            <td class="text-xs-center">{{ props.item.lowPrice }}</td>
                            <td class="text-xs-center">{{ props.item.industry }}</td>
                            <td class="justify-center layout px-0">
                                <v-icon
                                        small
                                        class="mr-2"
                                        @click="editItem(props.item)"
                                >
                                    edit
                                </v-icon>
                                <v-icon
                                        small
                                        @click="deleteItem(props.item)"
                                >
                                    delete
                                </v-icon>
                            </td>
                        </template>
                        <template slot="no-data">
                            <v-btn color="primary" @click="initialize">Reset</v-btn>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
            <v-dialog v-model="showYouSure" persistent max-width="290">
                <v-card>
                    <v-card-title class="headline">Удалить запись?</v-card-title>
                    <v-card-text>Вы действительно хотите удалить данную запись?</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click="answerYouSure(false)">Отменить</v-btn>
                        <v-btn color="red darken-1" flat @click="answerYouSure(true)">Удалить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Market", data: () => ({
            dialog: false,
            selected: [],
            headers: [
                {
                    text: 'Компания',
                    align: 'left',
                    sortable: true,
                    value: 'name'
                },
                {text: 'Текущая цена', value: 'price'},
                {text: 'Максимум на сегодня', value: 'maxPrice'},
                {text: 'Минимум на сегодня', value: 'minPrice'},
                {text: 'Индустрия', value: 'industry'},
                {text: 'Действия', value: 'actions'},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                price: 0,

            },
            defaultItem: {
                name: '',
                price: 0,
            }
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Добавить акцию' : 'Изменить акцию'
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
        },

        methods: {
            initialize() {
                this.$axios.get('http://localhost:9000/market/list')
                    .then(response => {
                        this.desserts = response.data
                    })
                    .catch(error => alert(error))
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Вы действительно хотите удалить запись?') && this.desserts.splice(index, 1)
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

</style>