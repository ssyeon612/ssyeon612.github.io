<template>
    <section class="about" id="about">
        <div class="ttl">
            <h3>About Me</h3>
            <span class="bar"></span>
        </div>
        <div class="con">
            <div class="profile"><img src="@/assets/images/me.jpg" alt="" /></div>
            <div class="desc">
                <p>
                    <b>안녕하세요,</b><br />
                    3년 차, 프론트엔드 개발자 정승연입니다.
                </p>
                <details open>
                    <summary class="color">자기소개</summary>
                    <div class="detail">
                        <dl>
                            <!-- <dt>블라블라</dt> -->
                            <dd>3년 차 개발자로 인하우스와 에이전시에서 개발/배포/운영을 했습니다.</dd>
                        </dl>
                    </div>
                </details>
                <hr />
                <div class="info">
                    <ul>
                        <div>Contact</div>
                        <li>
                            <i><font-awesome-icon icon="mobile-screen-button" /></i>010-7728-0612
                        </li>
                        <li>
                            <i><font-awesome-icon :icon="['far', 'envelope']" /></i>ssyeon612@gmail.com
                        </li>
                        <!-- <li>
                            <i><font-awesome-icon :icon="['far', 'face-smile']" /></i>1995. 06. 12
                        </li> -->
                        <div>Channel</div>
                        <li class="link">
                            <i><font-awesome-icon :icon="['fab', 'github']" /></i><a href="https://github.com/ssyeon612" target="_blank">https://github.com/ssyeon612</a>
                        </li>
                        <li class="link">
                            <i><font-awesome-icon :icon="['fass', 'earth-asia']" /></i><a href="https://yeongseungjeong.tistory.com" target="_blank">https://yeongseungjeong.tistory.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style></style>
