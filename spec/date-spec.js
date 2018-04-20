import { Age, getAge } from "./../src/date.js";

describe('Age', function() {
  let nowDate;
  let userDate;
  let userAge;
  beforeEach(function() {
    nowDate = new Date();
    userDate = new Date("1987/09/18");
    userAge = new Age();
  });

  it('should determine the users age in seconds', function() {
    expect(userAge.age * (((365 * 24) * 60) * 60)).toEqual();
  });
});
