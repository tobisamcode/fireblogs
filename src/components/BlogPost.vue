<template>
  <div class="blog-wrapper">
    <div class="blog-content">
        <div>
            <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
            <h2 v-else>{{post.title}}</h2>
            <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
            <p v-else>{{post.blogHTML}}</p>
            <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
               Login/Register<Arrow class="arrow arrow-light" />
            </router-link>
            <router-link class="link link-light" v-else to="#">
               View The Post<Arrow class="arrow" />
            </router-link>
        </div>

        <div class="blog-photo">
            
        </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"

export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    }
};
</script>

<style lang="scss" scoped>

</style>