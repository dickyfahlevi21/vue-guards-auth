<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
      <div class="text-center">
        <img v-bind:src="photo.url" class="w-6/12 mx-auto" />
        <p>{{ photo.id }}</p>
        <p>{{ photo.title }}</p>
      </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
  import dataPhotos from "@/dummy/photos";
  import SideBar from "@/components/SideBar/SideBar.vue";

  export default {
    name: "DetailPhoto",
    components: {
      SideBar,
    },
    data() {
      return {
        photo: [],
      };
    },
    created() {
      this.photo = dataPhotos.filter(
        (photo) => photo.id == this.$route.params.id
      )[0];
    },
  };
</script>

<style scoped></style>
