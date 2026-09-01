import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

import MainLayout from "../layouts/MainLayout";

export default [
  layout("../layouts/MainLayout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
