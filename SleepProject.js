/* Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate 
if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 8;
        break;
      default:
        console.log('Error');
    } 
    
    
  }
  
  const getActualSleepHours = () => 
  getSleepHours('monday') +
        getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +
        getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  
   
  
  
  
  
  const getIdealSleepHours = () => {
    const idealHours = 12;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      if (actualSleepHours === idealSleepHours) {
      console.log('You have perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You sleep ' + (actualSleepHours - idealSleepHours) + ' hours too much!');
    } else {
      console.log('You should sleep ' + (idealSleepHours - actualSleepHours) + ' hours more!');
    }
  
  
    
  }
  
  calculateSleepDebt();
  
  
  