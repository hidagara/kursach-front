<template>
    <v-content>
        <v-container fluid fill-height class="grey lighten-4">
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn icon large target="_blank" v-on:click = "hola">
                                <v-icon large>code</v-icon>
                            </v-btn>
                        </template>
                        <span >Source</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn icon large href="https://codepen.io/johnjleider/pen/jZQNbd" target="_blank" v-on="on">
                                <v-icon large>mdi-codepen</v-icon>
                            </v-btn>
                        </template>
                        <span>Codepen</span>
                    </v-tooltip>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Market",
        data () {
            return {
                items: [
                    { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
                    { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
                    { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
                ],
                items2: [
                    { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
                    { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>