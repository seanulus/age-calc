class Age {
  constructor(getAge) {
    this.age = getAge();
  }

  ageInSeconds() {
    // this.prop = value;
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



console.log("age in seconds: " + (getAge("2016/09/18"))*(((365 * 24) * 60) * 60))

export { Age, getAge };
