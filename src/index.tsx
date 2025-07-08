import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 4000,
  routes: {
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,

    console: true,
  },
});

console.log("Dev Server running on PORT:" + server.port);
