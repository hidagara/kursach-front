<template>
 <div>
    <v-navigation-drawer
            :clipped="drawer.clipped"
            :fixed="drawer.fixed"
            :permanent="drawer.permanent"
            :mini-variant="drawer.mini"
            v-model="drawer.open"
            app
    >
        <v-list>
            <v-list-tile
                    v-if="!drawer.permanent"
                    @click="makeDrawerPermanent">
                <v-list-tile-action><v-icon>chevron_right</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Static Drawer</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="toggleMiniDrawer">
                <v-list-tile-action><v-icon>aspect_ratio</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Mini Drawer</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile @click="changeRoute('/users')">
                <v-list-tile-action><v-icon>supervised_user_circle</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Пользователи</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="changeRoute('/market')">
                <v-list-tile-action><v-icon>local_grocery_store</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Магазин акций</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="changeRoute('/portfolio')">
                <v-list-tile-action><v-icon>business_center</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Портфели пользователей</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="changeRoute('/company')">
                <v-list-tile-action><v-icon>local_grocery_store</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Компании</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="changeRoute('/market')">
                <v-list-tile-action><v-icon>local_grocery_store</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Пользователи</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="changeRoute('/login')">
                <v-list-tile-action><v-icon>assignment_ind</v-icon></v-list-tile-action>
                <v-list-tile-content><v-list-tile-title>Вход</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>

    <v-toolbar
            app
            :fixed="toolbar.fixed"
            :clipped-left="toolbar.clippedLeft"
    >
        <v-toolbar-side-icon
                @click.stop="toggleDrawer"
        ></v-toolbar-side-icon>

        <v-toolbar-title>Управление инвестициями</v-toolbar-title>
    </v-toolbar>
 </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            source: String
        }, data: () => ({
            drawer: {
                // sets the open status of the drawer
                open: true,
                // sets if the drawer is shown above (false) or below (true) the toolbar
                clipped: false,
                // sets if the drawer is CSS positioned as 'fixed'
                fixed: false,
                // sets if the drawer remains visible all the time (true) or not (false)
                permanent: true,
                // sets the drawer to the mini variant, showing only icons, of itself (true)
                // or showing the full drawer (false)
                mini: true
            },
            toolbar: {
                //
                fixed: true,
                // sets if the toolbar contents is leaving space for drawer (false) or not (true)
                clippedLeft: false
            },
            footer: {
                // sets the CSS position of the footer
                fixed: true,
                // sets if the footer is full width (true) or gives space to the drawer (false)
                clippedLeft: true
            }
        }),
        methods: {
            changeRoute(path) {
                this.$router.push(path)
            },
            // changes the drawer to permanent
            makeDrawerPermanent () {
                this.drawer.permanent = true
                // set the clipped state of the drawer and toolbar
                this.drawer.clipped = false
                this.toolbar.clippedLeft = false
            },
            // toggles the drawer variant (mini/full)
            toggleMiniDrawer () {
                this.drawer.mini = !this.drawer.mini
            },
            // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
            toggleDrawer () {
                if (this.drawer.permanent) {
                    this.drawer.permanent = !this.drawer.permanent
                    // set the clipped state of the drawer and toolbar
                    this.drawer.clipped = true
                    this.toolbar.clippedLeft = true
                } else {
                    // normal drawer
                    this.drawer.open = !this.drawer.open
                }
            }
        }
    }
</script>

<style scoped>

</style>