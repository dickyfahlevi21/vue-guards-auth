import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.view";

Vue.use(VueRouter);

// ini bisa masuk routes nya (buka komentarnya kalo mau test)
// const isAdmin = "Posts";

// ini ga bisa masuk routesnya
const isAdmin = "";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: () =>
      import(/* webpackChunkName: "Posts" */ "../views/Posts.view"),
    beforeEnter: (to, from, next) => {
      if (to.name !== isAdmin) {
        alert("Maap bang cuma admin yang boleh nih");
        next({ name: "Home" });
      } else next();
    },
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () =>
      import(
        /* webpackChunkName: "PostId" */ "../components/Posts/DetailPost.vue"
      ),
  },
  {
    path: "/albums",
    name: "Albums",
    component: () =>
      import(/* webpackChunkName: "Albums" */ "../views/Albums.view"),
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: () =>
      import(
        /* webpackChunkName: "AlbumId" */ "../components/Albums/DetailAlbum.vue"
      ),
  },
  {
    path: "/Photos",
    name: "Photos",
    component: () =>
      import(/* webpackChunkName: "Photos" */ "../views/Photos.view"),
  },
  {
    path: "/Photos/:id",
    name: "Photo",
    component: () =>
      import(
        /* webpackChunkName: "PhotoId" */ "../components/Photos/DetailPhoto.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
