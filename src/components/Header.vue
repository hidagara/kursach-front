<template>
    <v-container>


        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                class="grey lighten-4"
                app
        >
            <v-list
                    dense
                    class="grey lighten-4"
            >
                <template v-for="(item, i) in items">
                    <v-layout
                            v-if="item.heading"
                            :key="i"
                            row
                            align-center
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-divider
                            v-else-if="item.divider"
                            :key="i"
                            dark
                            class="my-3"
                    ></v-divider>
                    <v-list-tile
                            v-else
                            :key="i"
                            @click="changeRoute(item.link)"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="grey--text">
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="amber" app absolute clipped-left>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <span class="title ml-3 mr-5">Управление&nbsp;<span class="font-weight-light">Инвестициями</span></span>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            drawer: null,
            items: [
                {icon: 'lightbulb_outline', text: 'Магазин акций', link: "/markets"},
                {icon: 'touch_app', text: 'Компании', link: '/companies'},
                {icon: 'add', text: 'Создать портфель', link: '/portfolio/create'},
                {heading: 'Мои портфели', link: '/portfolio'},
                {icon: 'archive', text: 'Archive'},
                {icon: 'delete', text: 'Trash'},
                {divider: true},
                {heading: 'Мои счета'},
                {icon: 'archive', text: 'Рублевый'},
                {icon: 'delete', text: 'Далларый'},
                {divider: true},
                {divider: true},
                {icon: 'Настройки', text: 'Settings'},
                {icon: 'chat_bubble', text: 'Trash'},
                {icon: 'help', text: 'Help'},
                {icon: 'phonelink', text: 'App downloads'},
                {icon: 'keyboard', text: 'Keyboard shortcuts'}
            ]
        }),
        methods: {
            changeRoute: function (link) {

                if (link) {
                    this.$router.push(link)
                }
            }
        },
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>