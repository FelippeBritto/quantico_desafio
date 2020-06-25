<template>
    <span>
        <!-- Components -->
        <home-top></home-top>
        <home-details></home-details>
        <home-slide></home-slide>
        <home-depositions></home-depositions>
    </span>
</template>

<script>
import HomeTop from '@/components/HomeTop';
import HomeDetails from '@/components/HomeDetails';
import HomeSlide from '@/components/HomeSlide';
import HomeDepositions from '@/components/HomeDepositions';

export default {
    name: 'home',
    components: {
        HomeTop,
        HomeDetails,
        HomeSlide,
        HomeDepositions
    }
};
</script>
