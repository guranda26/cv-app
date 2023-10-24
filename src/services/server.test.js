// server.test.js
import { createServer, Model } from "miragejs";
import { makeServer } from "./server"; // Import your makeServer function

describe("MirageJS Server Tests", () => {
  let server;

  beforeEach(() => {
    server = createServer();
    makeServer({ environment: "test" }); // Setup the server using the makeServer function
  });

  afterEach(() => {
    server.shutdown(); // Shutdown the server after each test
  });

  it("should return educations from the server", async () => {
    const response = await fetch("/api/educations");
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.educations).toHaveLength(3); // Updated expectation to match the correct property name
    expect(data.educations[0].title).toBe("Title 0");
    expect(data.educations[1].date).toBe(2000);
    // Add more assertions as needed
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

    expect(response.status).toBe(201); // Updated expectation to match the server response status
    expect(data.skill.name).toBe("Test Skill");
    expect(data.skill.range).toBe(50);
    // Add more assertions as needed
  });

  // Add more test cases for different server routes and scenarios
});
