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
    test("Test Tamnai with story: Snack", () => {
        const result = MahaLap.tamnaiWithStory("งู");
        expect(result).toEqual(3);
    });
    test("Test Tamnai with story: fish", () => {
        const result = MahaLap.tamnaiWithStory("ปลา");
        expect(result).toEqual(6);
    });
    test("Test Tamnai with story: buffalo", () => {
        const result = MahaLap.tamnaiWithStory("ควาย");
        expect(result).toEqual(10);
    });
    test("Test Tamnai with story: green snake", () => {
        const result = MahaLap.tamnaiWithStory("งูเขียวหางไหม้");
        expect(result).toEqual(105);
    });
    test("Test Tamnai with story: panda", () => {
        const result = MahaLap.tamnaiWithStory("แพนด้า");
        expect(result).toEqual(21);
    });
    test("Test Tamnai with story: Cinderella", () => {
        const result = MahaLap.tamnaiWithStory("Cinderella");
        expect(result).toEqual(55);
    });
    test("Test Tamnai with Time:กลางวัน random= 0.98 return 0.98", () => {
        global.Math.random = jest.fn(() => 0.98);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.98);
    });
    test("Test Tamnai with Time:กลางวัน random= 0.4 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.5);
    });
    test("Test Tamnai with Time:กลางวัน random= 0.4 return 0.4", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.4);
    });
    test("Test Tamnai with Time:กลางวัน random= 0.64 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.64);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.5);
    });

    test("Test Namo With ฝันวันจันทร์ เห็นงู ตอนกลางวัน", () => {
        global.Math.random = jest.fn(() => 0.64);
        const result = MahaLap.namo("จันทร์", "งู", "กลางวัน"); //  2 3 0.98
        expect(result).toEqual(960);
    });

    test("Test Namo With ฝันวันฮาโลวีน เห็นงูเขียวหางไหม้ ตอนกลางคืน", () => {
        global.Math.random = jest.fn(() => 0.44);
        const result = MahaLap.namo("เสาร์", "งูเขียวหางไหม้", "กลางคืน"); //((31 / 2) * (105 / 2) * (0.44)) * 100;
        expect(result).toEqual(8085);
    });
});