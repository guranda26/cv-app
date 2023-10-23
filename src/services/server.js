import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      education: Model,
      skill: Model,
    },

    seeds(server) {
      server.create("education", {
        date: 2021,
        title: "Title 0",
        description:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      });
      server.create("education", {
        date: 2000,
        title: "Title 1",
        description:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      });
      server.create("education", {
        date: 2012,
        title: "Title 2",
        description:
          "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      });
    },

    routes() {
      this.namespace = "api";

      this.get(
        "educations",
        (schema) => {
          return schema.educations.all();
        },
        { timing: 3000 }
      );

      this.get(
        "skills",
        (schema) => {
          return schema.skills.all();
        },
        { timing: 3000 }
      );

      this.post("skills", (schema, request) => {
        const { name, range } = JSON.parse(request.requestBody);
        const skill = schema.skills.create({ name, range });
        return skill;
      });
    },
  });
}
