<template>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <v-flex>
                        <v-toolbar flat>
                            <v-toolbar-title>Пользователи</v-toolbar-title>
                            <v-divider
                                    class="mx-2"
                                    inset
                                    vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <v-btn slot="activator" color="grey" class="mb-2">Добавить пользователя</v-btn>
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
                                <td>{{ props.item.name }}</td>
                                <td class="text-xs-center">{{ props.item.login }}</td>
                                <td class="text-xs-center">{{ props.item.password }}</td>
                                <td class="text-xs-center">{{ props.item.country }}</td>
                                <td class="text-xs-center">{{ props.item.email }}</td>
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
                                <v-btn color="primary" @click="initialize">Обновить</v-btn>
                            </template>
                        </v-data-table>
                    </v-flex>
                </v-layout>
                <v-dialog v-model="showYouSure" persistent max-width="290">
                    <v-card>
                        <v-card-title class="headline">Удалить запись?</v-card-title>
                        <v-card-text>Вы действительно хотите удалить пользователя?</v-card-text>
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
        name: "Users",
        data: () => ({
            showYouSure: false,
            dialog: false,
            headers: [
                {
                    text: 'ФИО',
                    align: 'left',
                    sortable: false,
                    value: 'fullname'
                },
                { text: 'Логин', value: 'login' , align: 'center'},
                { text: 'Пароль', value: 'password', align: 'center' },
                { text: 'Страна', value: 'country' , align: 'center'},
                { text: 'Email', value: 'email' , align: 'center'},
                { text: 'Действия', value: 'action', sortable: false , align: 'center'}
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                fullname: '',
                login: 0,
                password: 0,
                country: 0,
                email: 0
            },
            defaultItem: {
                fullname: '',
                login: 0,
                password: 0,
                country: 0,
                email: 0
            }
        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'Новый пользователь' : 'Редактировать'
            }
        },

        watch: {
            dialog (val) {
                val || this.close()
            }
        },

        created () {
            this.initialize()
        },
        mounted() {
            this.$axios.get('http://localhost:9000/user/list')
                .then(response => {
                        this.desserts = response.data
                })
                .catch(error => alert(error))
        },
        methods: {
            initialize () {
                this.$axios.get('http://localhost:9000/user/list')
                    .then(response => {
                        this.desserts = response.data
                    })
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            async deleteItem (item) {
                const index = this.desserts.indexOf(item)
                this.askYouSure().then( (confirm) => {
                    if (confirm) this.desserts.splice(index, 1)
                })
                this.$axios.delete('http://localhost:9000/user/delete/' + item.id)
            },

            askYouSure () {
                this.showYouSure = true
                return new Promise((resolve, reject) => {
                    this.resolveYouSure = resolve
                })
            },
            answerYouSure (confirm) {
                this.resolveYouSure(confirm)
                this.showYouSure = false
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.$axios.put('http://localhost:9000/user/add',this.editedItem)
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>