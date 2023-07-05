// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;


const submarinTitan = {
  _typeOfEngine : 'submarine', 
  _model : '1iE7_UML', 
  _constructorOfTheSubmarine : 'Titan Inc. Corp.', 
  color : 'white', 
  headCrew : {
      chief : 'Mark', 
      experience : 20, 
      degree : 'Engineer',
      subcontractors : 6, 
      medic : {
          chief : 'Anna', 
          experience : 10, 
          degree : 'Assistance emergency', 
          subcontractors : 5, 
      },
      departementIt : {
          chief : 'Elon', 
          experience : 12, 
          degree : 'Computer Science',
          subcontractors : 5, 
      },
      foodDepartement : {
          chief : 'Harry', 
          experience : 17, 
          degree : 'Master\'s degree in English cuisine',
          subcontractors : 5, 
      },
      set changeColor(newColor) {
          this.color = newColor; 
      }
  }
}; 
submarinTitan.color = 'red'; 
console.log(submarinTitan.color);
console.log(submarinTitan); 