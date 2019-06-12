<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <h2>Магазин акций и управление инвестиционными портфелями</h2>
                    <p>Позволяет вам покупать акции и в любой момент их продавать по выгодному курсу</p>

                    <v-tooltip right>
                        <v-btn
                                icon
                                large
                                :href="source"
                                target="_blank"
                                slot="activator"
                        >
                            <v-icon large>code</v-icon>
                        </v-btn>
                        <span>Source</span>
                    </v-tooltip>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>

    export default {
        name: "Landing"
    }
</script>

<style scoped>

</style>