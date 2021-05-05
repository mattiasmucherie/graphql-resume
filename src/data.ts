export const data = {
  bio: {
    name: "Mattias Mucherie",
    tagline: "Frontend Developer",
    email: "mattias.mucherie@gmail.com",
    website: "https://mattiasmucherie.com",
    linkedin: "https://www.linkedin.com/in/mattias-mucherie/"
  },
  skills: ["Speaking French", "Rugby player", "Cooking"],
  positions: [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Scania CV AB",
      startDate: "2019-11-10",
      location: "Stockholm, Sweden",
      endDate: null,
      achievments: ["Develop", "Maintain", "Implement TS everywhere"]
    }
  ],
  projects: [
    {
      title: "Been Map",
      description:
        "A map where you can fill in where you have been. Saves to localstorage. Built with React, Typescript and styled-components.",
      img: "been-map.png",
      demo: "https://elated-bassi-347395.netlify.app/",
      sourceCode:
        "https://github.com/mattiasmucherie/been-map/tree/master/client"
    },
    {
      title: "Button Component",
      description:
        "A reusable button component following a figma design. Built with React, Typescript and styled-components",
      img: "button-component.png",
      demo: "https://peaceful-turing-ae0694.netlify.app/",
      sourceCode: "https://github.com/mattiasmucherie/button-comp"
    },
    {
      title: "Microfronts",
      description:
        "A example of microfrontends (This was more of a technical project, the content is placeholder). Built with webpack 5 module federation. Hosted and handled on AWS.",
      img: "microfronts.png",
      sourceCode: "https://github.com/mattiasmucherie/dashboard-project",
      demo: "https://d3uobd61j963jo.cloudfront.net/"
    },
    {
      title: "Trucks online",
      description:
        "Shows if a truck is online or not. Built with React and Express.",
      img: "scania-truck-online.png",
      sourceCode: "https://github.com/mattiasmucherie/devtestKSEO",
      demo: "https://arcane-fjord-86837.herokuapp.com/"
    },
    {
      title: "Snake Calendar",
      description:
        "A Calendar where you can track progression day by day. Built with React/Redux and Typescript. Firebase database and function used as backend.",
      img: "snake-calendar.png",
      sourceCode: "https://github.com/MLNProjects/SnakeCalendar",
      demo: "https://snakecalender.firebaseapp.com/#/"
    }
  ]
}
