import { Age, getAge } from "./../src/date.js";

describe('Age', function() {
  let nowDate;
  let reusableDate
  let reusableAge;
  let userAge;
  let userAge1;
  let lifeExpectancy;
  let testAge;

  beforeEach(function() {
    nowDate = new Date();
    reusableDate = new Date("2017/04/20");
    reusableAge = getAge(reusableDate);
    lifeExpectancy = 78;
    testAge = 88;
    userAge = new Age(reusableAge, lifeExpectancy);
    userAge1 = new Age(testAge, lifeExpectancy);
  });

  it('should determine the users age in seconds', function() {
    expect(userAge.ageInSeconds()).toEqual(31536000);
  });

  it('should determine the users age based on a birthdate', function() {
    expect(getAge("1987/09/18")).toEqual(30);
  });

  it('should determine the users age in Mercury years', function() {
    expect(userAge.inMercuryYears()).toEqual(4.17);
  });

  it('should determine the users age in Venus years', function() {
    expect(userAge.inVenusYears()).toEqual(1.61);
  });

  it('should determine the users age in Mars years', function() {
    expect(userAge.inMarsYears()).toEqual(.53);
  });

  it('should determine the users age in Jupiter years', function() {
    expect(userAge.inJupiterYears()).toEqual(.084);
  });

  it('should determine the life expectancy of the user', function() {
    expect(userAge.lifeExpectancy()).toEqual([321, 124, 77, 41, 6]);
  });

  it('should determine how many years over the life expectancy', function() {
    expect(userAge1.lifeExpectancy()).toEqual([41, 16, 10, 5, 1]);
  });
});
