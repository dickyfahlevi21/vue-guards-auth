<template>
  <div class="content float-left w-8/12 align-middle">
    <paginate name="postPagine" :list="dataPost" :per="4" ref="postPagine">
      <div
        v-for="(listPost, i) in paginated('postPagine')"
        :key="i"
        class="m-6 flex"
      >
        <img src="../../assets/img/dummy.png" alt="dummy" />
        <div class="mx-3">
          <h2 class="text-3xl post-title font-bold mb-4">
            {{ listPost.title }}
          </h2>
          <p class="text-sm post-sub-title mb-6">{{ listPost.body }}</p>
          <router-link
            :to="`posts/${listPost.id}`"
            class="button-color text-white text-base py-1 px-10"
            >Read more</router-link
          >
        </div>
      </div>
    </paginate>
    <paginate-links class="ml-20" for="postPagine" :limit="4"></paginate-links>
  </div>
</template>

<script>
  import dataPosts from "@/dummy/posts";

  export default {
    name: "Main",
    data() {
      return {
        dataPost: dataPosts,
      };
    },
  };
</script>
