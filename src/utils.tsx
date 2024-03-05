export const ConvertMinutesToHours = ( minutes:number ) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    let output = `${hours}hr${hours !== 1 ? 's' : ''}`;
    if (remainingMinutes > 0) {
      output += `  ${remainingMinutes}min${remainingMinutes !== 1 ? 's' : ''}`;
    }

  return output

  }
  