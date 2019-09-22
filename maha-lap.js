class MahaLap {
  static tamnaiWithDay(day) {
    switch (day) {
      case "อาทิตย์":
        return 1;
      case "จันทร์":
        return 2;
      case "อังคาร":
        return 3;
      case "พุธ":
        return 4;
      case "พฤหัสบดี":
        return 5;
      case "ศุกร์":
        return 6;
      case "เสาร์":
        return 7;
      case "สงกรานต์":
        return 13;
      case "ฮาโลวีน":
        return 31;
      case "คริสมาสต์":
        return 25;
      default:
        return 99;
    }
  }

  static tamnaiWithStory(Story) {
    const length = Story.length;
    let sum = 0;
    for (var i = 1; i <= length; i++) {
      sum += i;
    }
    switch (sum) {
      case 3:
        return sum;
      case 6:
        return sum;
      case 10:
        return sum;
      default:
        return 99;
    }
  }
}

module.exports = MahaLap;
