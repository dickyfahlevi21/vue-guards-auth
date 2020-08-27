<template>
  <div class="content inline-block w-full">
    <home-photo />
    <side-bar />
  </div>
</template>

<script>
  import HomePhoto from "@/components/Photos/HomePhoto.vue";
  import SideBar from "@/components/SideBar/SideBar.vue";
  export default {
    name: "Posts",
    components: {
      HomePhoto,
      SideBar,
    },
  };
</script>
