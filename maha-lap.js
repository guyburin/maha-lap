class MahaLap {
  static tamnaiWithDay(day) {
    switch (day) {
      case "อาทิตย์":
        return 1;
        break;
      case "จันทร์":
        return 2;
        break;
      case "อังคาร":
        return 3;
        break;
      case "พุธ":
        return 4;
        break;
      case "พฤหัสบดี":
        return 5;
        break;
      case "ศุกร์":
        return 6;
        break;
      case "เสาร์":
        return 7;
        break;
    }
  }
}

module.exports = MahaLap;
