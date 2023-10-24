import experiences from "./experience";

describe("Experiences Data", () => {
  it("should be an array", () => {
    expect(Array.isArray(experiences)).toBe(true);
  });

  it("each experience should have date, company, job, and description properties", () => {
    experiences.forEach((experience) => {
      expect(experience).toHaveProperty("date");
      expect(experience).toHaveProperty("info");
      expect(experience.info).toHaveProperty("company");
      expect(experience.info).toHaveProperty("job");
      expect(experience.info).toHaveProperty("description");
    });
  });

  it("description should be a non-empty string", () => {
    experiences.forEach((experience) => {
      expect(typeof experience.info.description).toBe("string");
      expect(experience.info.description.trim()).not.toBe("");
    });
  });
});
