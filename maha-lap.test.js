const MahaLap = require("./maha-lap");

describe("Test Maha-Lap", () => {
  test("Test Tamnai with day: monday", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamnai with day: sunday", () => {
    const result = MahaLap.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });
  test("Test Tamnai with day: tuesday", () => {
    const result = MahaLap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });
  test("Test Tamnai with day Wednesday ", () => {
    const result = MahaLap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });
  test("Test Tamnai with day: Thursday ", () => {
    const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });
  test("Test Tamnai with day: Friday ", () => {
    const result = MahaLap.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });
  test("Test Tamnai with day: Saturay ", () => {
    const result = MahaLap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });
  test("Test Tamnai with day: Songkran", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });
  test("Test Tamnai with day: Halloween", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });
  test("Test Tamnai with day: Christmas", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
  test("Test Tamnai with day: Not have a day", () => {
    const result = MahaLap.tamnaiWithDay("Not have a day");
    expect(result).toEqual(99);
  });
  test("Test Tamnai with story: Not have a day", () => {
    const result = MahaLap.tamnaiWithStory("งู");
    expect(result).toEqual(2);
  });
});
