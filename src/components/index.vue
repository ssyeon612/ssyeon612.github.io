<template>
    <div>
        <div class="wrap" id="wrap">
            <the-nav></the-nav>
            <main class="main" role="main">
                <Home />
                <About />
                <Experience />
                <Project />
            </main>
            <button class="top-btn" v-on:click="scrollToTop">
                <font-awesome-icon icon="angle-up" />
            </button>
        </div>
        <teleport to="#wrap" v-for="(item, index) in modalAlertComponents" :key="index">
            <component :index="index" :is="item.component" v-bind="item" @close="fnCloseModalAlert" />
        </teleport>
        <!-- <PERCE /> -->
    </div>
</template>

<script>
import TheNav from "./TheNav";
import Home from "./contents/home";
import About from "./contents/about";
import Experience from "./contents/experience";
import Project from "./contents/project";
// import PERCE from "./modal/portfolio/Perce";

import { reactive, computed, toRefs } from "vue";
import { useStore } from "vuex";

const layoutState = () => {
    const { getters, dispatch } = useStore();
    const state = reactive({
        modalAlertComponents: computed(() => getters["layout/getModalAlertComponents"]),
    });
    const fnCloseModalAlert = (index = 0) => {
        dispatch("layout/removeAllModalAlertComponent", { index });
    };
    return {
        fnCloseModalAlert,
        ...toRefs(state),
    };
};

export default {
    name: "wrap-index",
    components: {
        TheNav,
        Home,
        About,
        Experience,
        Project,
        // PERCE,
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
