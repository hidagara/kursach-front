<template>

    <v-content>
        <Header></Header>
        <v-container fluid fill-height class="grey lighten-4">
            <v-layout justify-center align-center>
                <v-flex xs12>
                    Добро пожаловать.
                </v-flex>
                <v-flex xs12>
                    Здесь вы можете совершать операции по покупке и продаже акций.
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Landing",
        components: {Header}
    }
</script>

<style scoped>

</style>