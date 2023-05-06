<template>
    <section id="project">
        <div class="ttl">
            <h3>Projects</h3>
            <span class="bar"></span>
        </div>
        <div class="con project">
            <div class="con-box" v-for="(item, index) in list" :key="index" @click="openModal(item.name)">
                <div class="desc">
                    <i><font-awesome-icon :icon="item.icon" /></i><br />
                    <b>{{ item.label }}</b>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";

export default {
    setup() {
        const { proxy } = getCurrentInstance();
        const { dispatch } = useStore();

        const state = reactive({
            list: [
                { name: "PERCE", label: "퍼스", desc: "프론트", icon: "mobile" },
                { name: "STONES", label: "스톤즈", desc: "프론트, 백", icon: "mobile" },
            ],
        });

        const openModal = (name) => {
            const payload = {};
            payload.component = proxy.$modalAlertNames[name];
            dispatch("layout/pushModalAlertComponent", payload);
        };

        return {
            ...toRefs(state),
            openModal,
        };
    },
};
</script>

<style></style>
