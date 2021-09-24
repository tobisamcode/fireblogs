<template>
  <div class="home">
    <BlogPost  :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>



<script>
import BlogPost from "../components/BlogPost.vue"

export default {
  name: "Home",
  components: { BlogPost },
  data() {
      return {
        welcomeScreen: {
          title: "welcome!",
          blogPost: "Weekly blog articles with all things programminig including HTML, CSS, JavaScript and more. Register today to never miss a post",
          welcomeScreen: true,
          photo: 'coding',
        },
        sampleBlogPost: [
          {
            title: "This is filler title!",
            blogHTML: "This is a filler blog post title!",
            blogCoverPhoto: "beautiful-stories",
          },
          {
            title: "This is filler title 2!",
            blogHTML: "THis is a filler blog post title!",
            blogCoverPhoto: "designed-for-everyone",
          },
        ],
      };
  },
};
</script>