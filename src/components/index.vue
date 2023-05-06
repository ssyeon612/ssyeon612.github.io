<template>
    <div>
        <div class="wrap">
            <the-nav></the-nav>
            <main class="main" role="main">
                <Home />
                <About />
                <Experience />
                <Portfolio />
            </main>
            <button class="top-btn" v-on:click="scrollToTop">
                <font-awesome-icon icon="angle-up" />
            </button>
        </div>
        <!-- <teleport to="#wrap" v-for="(item, index) in modalAlertComponents" :key="index">
            <component :index="index" :is="item.component" v-bind="item" @close="fnCloseModalAlert" />
        </teleport> -->
    </div>
</template>

<script>
import TheNav from "./TheNav";
import Home from "./contents/home";
import About from "./contents/about";
import Experience from "./contents/experience";
import Portfolio from "./contents/portfolio";

// import { reactive, computed, toRefs } from "vue";
// import { useStore } from "vuex";

const layoutState = () => {
    // const { getters, dispatch } = useStore();
    // const state = reactive({
    //     modalAlertComponents: computed(() => getters["layout/getModalAlertComponents"]),
    // });
    // const fnCloseModalAlert = (index = 0) => {
    //     dispatch("layout/closeModalAlertComponent", { index });
    // };
    // return {
    //     fnCloseModalAlert,
    //     ...toRefs(state),
    // };
};

export default {
    name: "index",
    components: {
        TheNav,
        Home,
        About,
        Experience,
        Portfolio,
    },
    setup() {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        return { scrollToTop, ...layoutState() };
    },
};
</script>

<style scoped></style>
