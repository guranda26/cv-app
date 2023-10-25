import feedbackData from "./feedbackData";

describe("feedbackData", () => {
  test("should have valid feedback items", () => {
    expect(Array.isArray(feedbackData)).toBe(true);
    feedbackData.forEach((item, index) => {
      expect(item).toHaveProperty("feedback");
      expect(typeof item.feedback).toBe("string");
      expect(item).toHaveProperty("reporter");
      expect(item.reporter).toHaveProperty("photoUrl");
      expect(typeof item.reporter.photoUrl).toBe("string");
      expect(item.reporter).toHaveProperty("name");
      expect(typeof item.reporter.name).toBe("string");
      expect(item.reporter).toHaveProperty("citeUrl");
      expect(typeof item.reporter.citeUrl).toBe("string");
    });
  });
});
