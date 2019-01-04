/* Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate 
if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

const getSleepHours = {
  monday = '8';
  tuesday = 8;
  wednesday = 8;
  thursday = 8;
  friday = 8;
  saturday = 8;
  sunday = 8;

}

return sleepHours[day] || console.log('Error')

/* UPGRADE = if you have a lot of possible options just write it like that instead of switch or if/else
Old version:
day => {
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
    
    
  } */
  
  const getActualSleepHours = () => 
  getSleepHours('monday') +
        getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') +
        getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  
   
  
  
  
  
  const getIdealSleepHours = () => {
    const idealHours = 12;
    const daysOfWeek = 7; /* UPGRADED: MAGIC NUMBERS! - always write what any variable means - 
    never add just string/number etc without name. */
    return idealHours * daysOfWeek;
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
  
  
  