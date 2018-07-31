describe("The Question List", () => {

  beforeEach(() => {
    console.log('Before each!');
  });

  beforeAll(() => {
    console.log('Before all!');
  });

  afterEach(() => {
    console.log('After each!');
  });

  afterAll(() => {
    console.log('After all!');
  });

  it("should display a list of items", () => {
    expect(40 + 2).toEqual(42);
  });

  it("should be the meaning of life", () => {
    expect(40 + 2).toEqual(42);
  });

});