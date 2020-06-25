<template>
    <v-app id="app">
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {}
};
</script>

<style></style>
