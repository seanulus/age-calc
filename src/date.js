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

  belowLifeExpectancy() {
    if (this.userAge < this.expectancy) {
      return this.expectancy - this.userAge;
    }
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
