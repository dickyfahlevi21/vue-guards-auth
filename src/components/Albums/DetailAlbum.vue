<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
      <div class="m-6 text-center">
        <img src="../../assets/img/dummy.png" class="w-6/12 mx-auto" />
        <p>{{ album.id }}</p>
        <p>{{ album.title }}</p>
      </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
  import dataAlbums from "@/dummy/albums";
  import SideBar from "@/components/SideBar/SideBar.vue";

  export default {
    name: "DetailAlbum",
    components: {
      SideBar,
    },
    data() {
      return {
        album: [],
      };
    },
    created() {
      this.album = dataAlbums.filter(
        (album) => album.id == this.$route.params.id
      )[0];
    },
  };
</script>

<style scoped></style>
