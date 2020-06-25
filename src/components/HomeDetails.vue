<template>
    <v-container fluid class="home-details">
        <v-container grid-list-lg>
            <v-layout row>
                <v-flex>
                    <img id="drf-2" src="../assets/drf_2.png" alt="Dr. Flávio" srcset />
                </v-flex>
                <v-flex class="ml-5 mb-auto text--primary"></v-flex>
                <v-flex>
                    <div class="headline mt-3 text-uppercase font-weight-bold">
                        <h6>Dr. Flávio Lima</h6>
                        <h4>Carisma e cuidado com os pacientes</h4>
                    </div>
                    <!-- AQUI TEM UMA LINHA -->
                    <p class="subheading mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras pulvinar risus quis mauris interdum, in euismod
                        nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque
                        sollicitudin, mauris a consequat consectetur, turpis
                        nisl sollicitudin enim, id consectetur neque neque nec
                        metus. Pellentesque dolor nisi, vulputate quis lobortis
                        ac, tincidunt et quam. Mauris pulvinar blandit nisi nec
                        mattis. Aliquam accumsan ut sem eget efficitur. Vivamus
                        in tortor gravida eros laoreet condimentum nec vel dui.
                        Nullam quam massa, ultrices eget tincidunt a, pulvinar
                        ac libero.
                    </p>
                    <a href="#">+ Currículo</a>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
.home-details {
    background: url('../assets/bkg_white.png');
    background-size: cover;
    width: 100%;
    height: auto;
    color: #303339;
}
a {
    text-decoration: none;
}

#drf-2 {
    max-width: 460px;
    max-height: 720px;

    box-shadow: 50px 50px 0px 0px #fff;
}
</style>
