<template>
  <div class="blog-card-wrap">
      <div class="blog-cards container">
          <div class="toggle-edit">
              <span>Toggle Editting Post</span>
              <input type="checkbox" v-model="editPost">
          </div>
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
      </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";

export default {
    name: "blogs",
    components: { BlogCard },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards;
        },
        editPost: {
            get() {
                return this.$store.state.editPost;
            },
            set(payload) {
                this.$store.commit("toggleEditPost", payload)
            },
        },
    },
    beforeDestroy() {
        this.$store.commit("toggleEditPost", false)
    }
};
</script>


<style lang="scss" scoped>
.blog-cards {
    position: relative;

    .toggle-edit {
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        right: 0;
        @media (max-width: 450px) {
            top: -50px;
        }

        span {
            margin-right: 16px;
        }
    }

    input[type="checkbox"] {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    -webkit-appearance: none;
    background-color: #fff;
    outline: none;
    width: 80px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    }

    input[type='checkbox']:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    // top: 2px;
    left: 0;
    background: #303030;
    transform: scale(1.1);
    transition: 750ms ease all;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    }

    input:checked[type='checkbox']:before {
    background: #fff;
    left: 48px;
    align-items: center;
    } 
}
</style>