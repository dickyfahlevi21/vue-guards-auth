<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
      <div class="m-6">
        <img
          src="../../assets/img/dummy.png"
          alt="dummy"
          class="text-center mx-auto"
        />
        <div class="mx-3 text-center">
          <h1>{{ post.id }}</h1>
          <h2 class="text-3xl post-title font-bold mb-4">{{ post.title }}</h2>
          <p class="text-sm post-sub-title mb-6">{{ post.body }}</p>
        </div>
      </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
  import dataPosts from "@/dummy/posts";
  import SideBar from "@/components/SideBar/SideBar.vue";

  export default {
    name: "DetailPost",
    components: {
      SideBar,
    },
    data() {
      return {
        post: [],
      };
    },
    created() {
      this.post = dataPosts.filter(
        (post) => post.id == this.$route.params.id
      )[0];
    },
  };
</script>
