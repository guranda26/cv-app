import scrollToElement from "./scrollElement";

describe("scrollToElement", () => {
  let mockElement;
  beforeEach(() => {
    mockElement = document.createElement("div");
    mockElement.id = "mockElementId";
    document.body.appendChild(mockElement);
  });

  afterEach(() => {
    mockElement.remove();
  });

  it("should scroll to the element when it exists", () => {
    const scrollIntoViewMock = jest.fn();
    mockElement.scrollIntoView = scrollIntoViewMock;

    scrollToElement("mockElementId");

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("should not throw error if element does not exist", () => {
    expect(() => {
      scrollToElement("nonExistingElementId");
    }).not.toThrow();
  });
});
