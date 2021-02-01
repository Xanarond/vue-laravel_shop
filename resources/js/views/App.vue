<template>
    <div id="app">
        <Navbar/>
        <div class="container">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
    name: "app",
    components: {Footer, Navbar}
}
</script>

<style>
body {
    background-color: #121220;
}
</style>
