var app = new Vue({
  el: "#app",
  data() {
    return {
      items: [
        {
          id: 0,
          image: "./assets/02.png",
          altText: "Multiple hands poking out of a rubber ball",
          title: "Reliability",
          content:
            "Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe.",
        },
        {
          id: 1,
          image: "./assets/07.png",
          altText: "Many collected lightbulbs",
          title: "We ❤ Open Source",
          content:
            "We're proud to dedicate teams of full-time employees to operating the npm Registry, and other projects that support and nurture a vibrant open source community.",
        },
        {
          id: 2,
          image: "./assets/10.png",
          altText: "Multiple hands poking out of a pipe",
          title: "Community",
          content:
            "We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
        },
      ],
    };
  },
});
