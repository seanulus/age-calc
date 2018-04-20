class Age {
  constructor(userAge, expectancy) {
    this.userAge = userAge;
    this.expectancy = expectancy;
  }

  ageInSeconds() {
    return this.userAge * (((365 * 24) * 60) * 60);
  }

  inMercuryYears() {
    return parseFloat((this.userAge / .24).toFixed(2));
  }

  inVenusYears() {
    return parseFloat((this.userAge / .62).toFixed(2));
  }

  inMarsYears() {
    return parseFloat((this.userAge / 1.88).toFixed(2));
  }

  inJupiterYears() {
    return parseFloat((this.userAge / 11.86).toFixed(3));
  }

  belowLifeExpectancy(this.userAge, this.expectancy) {
    let yearsArray = [4.17, 1.61, 1, .53, .084];
    let userAgeArray = [];
    let expectancyArray = [];
    let totalArray = [];
    if (this.userAge <= this.expectancy) {
      for (var i = 0; i < yearsArray.length; i++) {
        userAgeArray.push(Math.floor(yearsArray[i] * this.userAge));
      }
      for (var a = 0; a < yearsArray.length; a++) {
        expectancyArray.push(yearsArray[a] * this.expectancy);
      }
      for (var b = 0; b < expectancyArray.length; b++) {
        totalArray.push(expectancyArray[b] - userAgeArray[b]);
      }
    } else {
      for (var c = 0; c < yearsArray.length; c++) {
        userAgeArray.push(yearsArray[c] * this.userAge);
      }
      for (var d = 0; d < yearsArray.length; d++) {
        expectancyArray.push(yearsArray[d] * this.expectancy);
      }
      for (var e = 0; e < userAgeArray.length; e++) {
        totalArray.push(userAgeArray[e] - expectancyArray[e]);
      }
    }
    return totalArray;
  }

  aboveLifeExpectancy() {}
}

function getAge(date) {
  const currentDate = new Date();
  const birthDate = new Date(date);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const birthMonth = currentDate.getMonth() - birthDate.getMonth();
  if (birthMonth < 0 || (birthMonth === 0 && currentDate.getDate() < birthDate.getDate())) {
    age = age - 1;
  }
  return age;
}


export { Age, getAge };
