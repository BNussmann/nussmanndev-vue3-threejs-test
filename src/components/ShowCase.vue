<template>
    <div class="proj-showcase">
      <slot :projects="projects" :index="index" :next="next" :prev="prev" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "diVersity Roleplay",
            desc: `Ein deutscher GTA Five Rollenspielserver unter Verwendung der Modifikation Alt:V. Projektkoordination als Projekt und Entwicklungsleiter sowie zusammenarbeit mit mehreren Developern über verschiedene Projektmanagement-tools`,
            techs: ["C#", "JS", "HTML", "CSS", "SQL", "GIT", "Trello"],
            urlText: "Github",
            url: "https://github.com/maxfer03/solana-digital-nomads",
            img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
          },
          {
            title: "My first Project2",
            desc: `Lorem ipsum  ...`,
            techs: ["PostgreSQL", "React", "Redux", "Node"],
            urlText: "Github",
            url: "https://github.com/maxfer03/solana-digital-nomads",
            img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
          },
          {
            title: "My first Project3",
            desc: `Lorem ipsum  ...`,
            techs: ["PostgreSQL", "React", "Redux", "Node"],
            urlText: "Github",
            url: "https://github.com/maxfer03/solana-digital-nomads",
            img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
          },
          {
            title: "My first Project4",
            desc: `Lorem ipsum  ...`,
            techs: ["PostgreSQL", "React", "Redux", "Node"],
            urlText: "Github",
            url: "https://github.com/maxfer03/solana-digital-nomads",
            img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
          },
          {
            title: "My first Project5",
            desc: `Lorem ipsum  ...`,
            techs: ["PostgreSQL", "React", "Redux", "Node"],
            urlText: "Github",
            url: "https://github.com/maxfer03/solana-digital-nomads",
            img: "https://efectocolibri.com/wp-content/uploads/2021/01/placeholder.png",
          },
        ],
        index: 0,
      };
    },
    methods: {
      next() {
        if (this.projects.length - 1 === this.index) {
          this.index = 0;
          console.log(this.index);
        } else {
          this.index++;
          console.log(this.index);
        }
      },
      prev() {
        if (this.index === 0) {
          this.index = this.projects.length - 1;
          console.log(this.index);
        } else {
          this.index--;
          console.log(this.index);
        }
      },
    },
  };
  </script>
  