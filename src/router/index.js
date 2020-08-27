import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.view";
import Posts from "../views/Posts.view";
import Photos from "../views/Photos.view";
import Albums from "../views/Albums.view";
import Post from "../components/Posts/DetailPost.vue";
import Photo from "../components/Photos/DetailPhoto.vue";
import Album from "../components/Albums/DetailAlbum.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: Album,
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: Album,
  },
  {
    path: "/Photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/Photos/:id",
    name: "Photo",
    component: Photo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
