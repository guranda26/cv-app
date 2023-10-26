import { createServer, Model } from "miragejs";
import { makeServer } from "./server";

describe("MirageJS Server Tests", () => {
  let server;

  beforeEach(() => {
    server = createServer();
    makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return educations from the server", async () => {
    const response = await fetch("/api/educations");
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.educations).toHaveLength(3);
    expect(data.educations[0].title).toBe("Title 0");
    expect(data.educations[1].date).toBe(2000);
  });

  it("should create a new skill", async () => {
    const skillData = {
      name: "Test Skill",
      range: 50,
    };

    const response = await fetch("/api/skills", {
      method: "POST",
      body: JSON.stringify(skillData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.skill.name).toBe("Test Skill");
    expect(data.skill.range).toBe(50);
  });
});
