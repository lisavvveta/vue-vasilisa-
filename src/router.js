import Vue from "vue";
import Router from "vue-router";
import Base from "./views/layout/base.vue";

import Bed from "./views/bed";
import Chair from "./views/chair";
import Coloring from "./views/colouring";
import Comments from "./views/comments";
import Commode from "./views/commode";
import Cupboard from "./views/cupboard";
import CupboardAngle from "./views/cupboardAngle";
import CupboardCoupe from "./views/cupboardCoupe";
import Print from "./views/print";
import Index from "./views/index";
import Kids from "./views/kids";
import Hollway from "./views/hollway";
import Kitchen from "./views/kitchen";
import ModulSistem from "./views/modulSistem";
import Sofa from "./views/sofa";
import SofaAngle from "./views/sofaAngle";
import Table from "./views/table";
import TableAngle from "./views/tableAngle";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/base",
      name: "base",
      component: Base,
      children: [
        {
          path: "/bed",
          name: "beds",
          component: Bed
        },
        {
          path: "/chair",
          name: "chairs",
          component: Chair
        },
        {
          path: "/coloring",
          name: "colorings",
          component: Coloring
        },
        {
          path: "/comments",
          name: "comments",
          component: Comments
        },
        {
          path: "/commode",
          name: "commode",
          component: Commode
        },
        {
          path: "/cupboard",
          name: "cupboards",
          component: Cupboard
        },
        {
          path: "/cupboardAngle",
          name: "cupboardsAngle",
          component: CupboardAngle
        },
        {
          path: "/cupboardCoupe",
          name: "cupboardCoupe",
          component: CupboardCoupe
        },
        {
          path: "/print",
          name: "prints",
          component: Print
        },
        {
          path: "/hollway",
          name: "hollway",
          component: Hollway
        },
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/kids",
          name: "kids",
          component: Kids
        },
        {
          path: "/kitchen",
          name: "kitchen",
          component: Kitchen
        },
        {
          path: "/modulSistem",
          name: "modulSistem",
          component: ModulSistem
        },
        {
          path: "/sofa",
          name: "sofa",
          component: Sofa
        },
        {
          path: "/sofaAngle",
          name: "sofaAngle",
          component: SofaAngle
        },
        {
          path: "/table",
          name: "table",
          component: Table
        },
        {
          path: "/tableAngle",
          name: "tableAngle",
          component: TableAngle
        }
      ]
    }
  ]
});
