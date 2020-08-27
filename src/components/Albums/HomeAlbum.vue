<template>
  <div class="pb-20 float-left w-8/12 align-middle">
    <div class="m-6">
      <paginate
        name="albumPagine"
        :list="dataAlbum"
        :per="6"
        ref="albumPagine"
        class="grid grid-cols-3"
      >
        <div
          v-for="(listAlbum, i) in paginated('albumPagine')"
          :key="i"
          class="px-3 text-center"
        >
          <img src="../../assets/img/dummy.png" class="w-8/12" />
          <router-link
            :to="`albums/${listAlbum.id}`"
            class="text-base font-bold"
          >
            <h2 class="p-2 w-8/12">{{ listAlbum.title }}</h2>
          </router-link>
        </div>
      </paginate>
      <paginate-links
        class="ml-20"
        for="albumPagine"
        :limit="4"
      ></paginate-links>
    </div>
  </div>
</template>

<script>
  import dataAlbums from "@/dummy/albums";

  export default {
    name: "Main",
    data() {
      return {
        dataAlbum: dataAlbums,
      };
    },
  };
</script>
