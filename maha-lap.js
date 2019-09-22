class MahaLap {
  static tamnaiWithDay(day) {
    switch (day) {
      case "อาทิตย์":
        return 1;
        break;
      case "จันทร์":
        return 2;
        break;
    }
  }
}

module.exports = MahaLap;
