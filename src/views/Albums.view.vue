<template>
  <div>
    <home-album />
    <side-bar />
  </div>
</template>

<script>
  import HomeAlbum from "@/components/Albums/HomeAlbum.vue";
  import SideBar from "@/components/SideBar/SideBar.vue";
  export default {
    name: "Posts",
    components: {
      HomeAlbum,
      SideBar,
    },
  };
</script>
