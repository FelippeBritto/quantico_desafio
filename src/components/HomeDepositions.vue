<template>
    <v-container grid-list-lg>
        <v-layout column>
            <v-flex xs12 class="text-xs-center display-1 txt-edt">Depoimentos</v-flex>
            <v-flex xs12 class="text-xs-center display-3 font-weight-blue my-5">
                CONHEÇA AS PESSOAS QUE TIVERAM SEUS SORRISOS
                TRANSFORMADOS
            </v-flex>
        </v-layout>

        <v-layout row wrap class="home-depositions">
            <!--Nausheen K.-->

            <v-flex xs12 sm12 md4>
                <v-responsive>
                    <img src="../assets/nausheen.png" height="70%" />
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">NAUSHEEN K.</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-responsive>

                <v-card-text>
                    <div>
                        <h3 class="headline ju mb-0">NAUSHEEN K.</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus modi vel iusto cum ipsum ipsa iure
                            debitis, fuga eos possimus tenetur corrupti velit
                            accusantium laudantium similique minima quos
                            distinctio eligendi?
                        </div>
                    </div>
                </v-card-text>
            </v-flex>
            <!-- Paulina -->
            <v-flex xs12 sm12 md4>
                <v-responsive>
                    <img src="../assets/paulina.png" height="70%" />
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">PAULINA P.</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-responsive>

                <v-card-text>
                    <div>
                        <h3 class="headline mb-0">PAULINA P.</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus modi vel iusto cum ipsum ipsa iure
                            debitis, fuga eos possimus tenetur corrupti velit
                            accusantium laudantium similique minima quos
                            distinctio eligendi?
                        </div>
                    </div>
                </v-card-text>
            </v-flex>
            <!-- RIVKA V. -->
            <v-flex xs12 sm12 md4>
                <v-responsive>
                    <img src="../assets/rivka.png" height="70%" />
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline white--text">RIVKA V.</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-responsive>

                <v-card-text>
                    <div>
                        <h3 class="headline mb-0">RIVKA V.</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus modi vel iusto cum ipsum ipsa iure
                            debitis, fuga eos possimus tenetur corrupti velit
                            accusantium laudantium similique minima quos
                            distinctio eligendi?
                        </div>
                    </div>
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDepositions',
    methods: {}
};
</script>

<style scoped>
.txt-edt {
    border-bottom-style: solid;
    color: #9a6d5a;
}
</style>
