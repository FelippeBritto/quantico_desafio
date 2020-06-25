<template>
    <v-container fluid fill-height class="home-top" style="max-height: 100vh;">
        <v-layout column pa-2>
            <div class=" mt-auto ml-5 display-0 text-uppercase white--text">
                Levar pessoas extraordinárias ao ápice
            </div>
            <div class="display-2 ml-5 text-uppercase white--text mb-3">
                <p>
                    <strong>Através da</strong> odontologia
                    <br />
                    <strong>e do autoconhecimento</strong>
                </p>
            </div>
            <v-btn class="ma-0 ml-5 btn-stl text-uppercase" tile dark>
                Marcar Avaliação
            </v-btn>
            <label class="ml-auto mt-4 white--text">Role para baixo</label>
            <v-btn fab class="ml-auto mt-0 transparent">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeTop'
};
</script>

<style scoped>
.home-top {
    background: url('../assets/drf_1.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.btn-stl {
    min-width: 5%;
    max-width: 15%;
    height: 50px;
    background-image: linear-gradient(to right, #cc9074, #a8664e);
}
</style>
