import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 4000,
  routes: {
    "/*": index,

    "/api/env": {
      GET: () =>
        Response.json({
          serviceId: process.env.EMAILJS_SERVICE_ID,
          emailTemplateId: process.env.EMAILJS_TEMPLATE_ID,
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        }),
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,

    console: true,
  },
});

console.log("Dev Server running on PORT:" + server.port);
