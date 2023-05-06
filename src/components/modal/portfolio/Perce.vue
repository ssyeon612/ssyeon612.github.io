<template>
    <div class="modal_dim on">
        <div class="modal_wrap">
            <div class="modal_inner center">
                <div class="modal">
                    <div class="modal_header">
                        <i class="i_x" @click="fnClose"><font-awesome-icon icon="x" /></i>
                    </div>
                    <div class="modal_con">
                        <!-- swiper -->
                        <div>
                            <img src="@/assets/images/portfolio/perce_01.webp" />
                        </div>
                        <div class="modal_txt">
                            <div class="txt_con">
                                <h3 class="ttl">
                                    퍼스 (Perce)
                                    <p>휴대폰 &#38; 인터넷 견적 비교 앱</p>
                                </h3>
                                <br />
                                <dl>
                                    <dt>휴대폰과 인터넷의 가격을 비교하는 O2O 지역기반 온라인 플랫폼</dt>
                                </dl>
                                <dl>
                                    <dt>Tech Stack</dt>
                                    <dd>
                                        <ul>
                                            <li class="vue">
                                                <i> <font-awesome-icon :icon="['fab', 'vuejs']" /></i>Vue.js
                                            </li>
                                            <li class="git">
                                                <i><font-awesome-icon :icon="['fab', 'git-alt']" /></i>
                                                Git
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>VISIT SITE</dt>
                                    <dd><a href="https://www.unsoft.co.kr/" target="_blank">PERCE</a></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "components-modal-perce",
    emits: ["close"],
    setup(props, { emit }) {
        const fnClose = () => {
            emit("close");
        };
        return { fnClose };
    },
};
</script>

<style lang="scss" scoped></style>
