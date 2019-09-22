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
        return 2;
        break;
      case "พุธ":
        return 2;
        break;
      case "พฤหัสบดี":
        return 2;
        break;
      case "ศุกร์":
        return 2;
        break;
      case "เสาร์":
        return 2;
        break;
    }
  }
}

module.exports = MahaLap;
