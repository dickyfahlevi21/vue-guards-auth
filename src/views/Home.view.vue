<template>
  <div class="content inline-block w-full">
    <Main />
    <side-bar />
  </div>
</template>

<script>
  import Main from "@/components/Main/Main.vue";
  import SideBar from "@/components/SideBar/SideBar.vue";

  export default {
    name: "Home",
    components: {
      Main,
      SideBar,
    },
  };
</script>
