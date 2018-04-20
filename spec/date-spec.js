import { Age, getAge } from "./../src/date.js";

describe('Age', function() {
  let nowDate;
  let reusableAge;
  let userAge;

  beforeEach(function() {
    nowDate = new Date();
    reusableAge = 1;
    userAge = new Age(reusableAge);
    // new Date("2016/09/18");
  });

  it('should determine the users age in seconds', function() {
    expect(userAge.ageInSeconds()).toEqual(31536000);
  });

  it('should determine the users age in Mercury years', function() {
    expect(userAge.inMercuryYears()).toEqual(4.17);
  });
});
