//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


//My solution:

function getGrade (s1, s2, s3) {
    let grade = (s1 + s2 + s3) / 3
    
    if (grade > 90) {
      return 'A'
    } else if (grade >= 80 && grade <= 90) {
      return 'B'
    } else if (grade >= 70 && grade <= 80) {
      return 'C'
    } else if (grade >= 60 && grade <= 70) {
      return 'D'
    } else {return 'F'}
  }