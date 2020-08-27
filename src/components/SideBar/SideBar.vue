<template>
  <div class="side-bar float-right w-4/12">
    <p class="text-2xl p-2">Side Bar</p>
    <hr class="w-11/12 mb-4" />

    <router-link to="/posts" class="side-color text-lg font-bold mt-1 p-2"
      >Post</router-link
    >
    <p class="sub-color text-base pl-2 pr-4 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
    </p>

    <router-link to="/photos" class="side-color text-lg font-bold mt-1 p-2"
      >Photo</router-link
    >
    <p class="sub-color text-base pl-2 pr-4 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
    </p>

    <router-link to="/albums" class="side-color text-lg font-bold mt-1 p-2"
      >Album</router-link
    >
    <p class="sub-color text-base pl-2 pr-4 mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s
    </p>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
  };
</script>
