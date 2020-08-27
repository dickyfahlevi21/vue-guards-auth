<template>
  <div class="content float-left w-8/12 align-middle">
    <div class="m-6">
      <paginate
        class="grid grid-cols-3"
        name="photoPagine"
        :list="dataPhoto"
        :per="6"
        ref="photoPagine"
      >
        <router-link
          :to="`photos/${listPhoto.id}`"
          v-for="(listPhoto, i) in paginated('photoPagine')"
          :key="i"
        >
          <img v-bind:src="listPhoto.url" class="w-full h-64" />
        </router-link>
      </paginate>
      <br />
      <paginate-links for="photoPagine" :limit="6"></paginate-links>
    </div>
  </div>
</template>

<script>
  import dataPhotos from "@/dummy/photos";
  export default {
    name: "Main",
    data() {
      return {
        dataPhoto: dataPhotos,
      };
    },
  };
</script>

<style>
  .h-64 {
    height: 35vh !important;
  }
  ul.paginate-links {
    @apply flex mx-5;
  }

  ul.paginate-links > li.number > a {
    @apply p-2 rounded mx-1 bg-green-500;
    cursor: pointer;
  }
  ul.paginate-links > li.active > a {
    @apply shadow bg-green-200;
  }
</style>
