module.exports = {
  routes: [
    {
      method: "POST",
      path: "/view-counter",
      handler: "view-counter.incrementViewCount",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
