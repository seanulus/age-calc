const userAge = getAge("2016/09/18");

class Age {
  constructor(userAge) {
    this.userAge = userAge;
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



console.log(userAge)

export { Age, getAge };
