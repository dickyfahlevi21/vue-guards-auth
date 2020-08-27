<template>
  <div class="content inline-block w-full">
    <home-posts />
    <side-bar />
  </div>
</template>

<script>
  import HomePosts from "@/components/Posts/HomePosts.vue";
  import SideBar from "@/components/SideBar/SideBar.vue";
  export default {
    name: "Posts",
    components: {
      HomePosts,
      SideBar,
    },
  };
</script>
