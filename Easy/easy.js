function exerciseForToday() {
    let todayExercise = "";
  
    function setExercise(exerciseName) {
      todayExercise = exerciseName;
    }
  
    function pullExercise() {
      return "Today's exercise: " + todayExercise;
    }
  
    return {
      setExercise: setExercise,
      pullExercise: pullExercise
    };
  }
  
  // Usage:
  // Creates an instance of exerciseForToday
  const exercise = exerciseForToday();
  
  // Sets the exercise for the day
  exercise.setExercise("Running");
  
  // Logs the exercise for the day
  console.log(exercise.pullExercise()); 

  
//   // Another example for swimming
//   exercise.setExercise("Swimming");

//   console.log(exercise.pullExercise());



//   // Another example for Dancing
//   exercise.setExercise("Dancing")

//   console.log(exercise.pullExercise());



//   // Another example for Fencing
//   exercise.setExercise("Fencing")

//   console.log(exercise.pullExercise());



