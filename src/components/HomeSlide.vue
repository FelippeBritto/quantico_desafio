<template>
    <v-container fluid fill-height class="home-slide" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <!-- <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div> -->
            <div class="display-1 mb-auto txt-edt text-uppercase">Especialidades</div>

            <div
                class="display-1 white--text text-xs-lefttext-uppercase"
            >CONQUISTE O SORRISO QUE TANTO DESEJA</div>
            <div class="display-3 white--text text-xs-center text-uppercase">
                <strong>ODONTOLOGIA ESTÃ‰TICA</strong>
            </div>
            <v-btn class="ma-0 ml-5 btn-stl text-uppercase" tile dark>Marcar Avaliação</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeSlide'
};
</script>

<style scoped>
.home-slide {
    background: url('../assets/slide-1.png');
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}
.txt-edt {
    border-bottom-style: solid;
    color: #9a6d5a;
}
.btn-stl {
    min-width: 5%;
    max-width: 15%;
    height: 50px;
    background-image: linear-gradient(to right, #cc9074, #a8664e);
}
</style>
