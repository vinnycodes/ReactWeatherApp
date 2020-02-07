export const decimalToPercent = decimal => {
  return ` ${Math.round(decimal * 100)}%`;
};

//Unix to Day/Date Converter
export const unixToDay = (unixTime, typeOfReturn) => {
  // UNIX Time to [DayOfWeek, Month, Day, Y, Military Time, Timezone ]
  let unixTimeConverter = new Date(unixTime * 1000).toString().split(' ');

  if (typeOfReturn === 'Date') {
    return `${unixTimeConverter[0]}, ${unixTimeConverter[2]} ${unixTimeConverter[1]}`;
  } else if (typeOfReturn === 'Day') {
    switch (unixTimeConverter[0]) {
      case 'Sun':
        return 'Sunday';
      case 'Mon':
        return 'Monday';
      case 'Tue':
        return 'Tuesday';
      case 'Wed':
        return 'Wednesday';
      case 'Thu':
        return 'Thursday';
      case 'Fri':
        return 'Friday';
      case 'Sat':
        return 'Saturday';
      default:
        return '';
    }
  }
};

// Unix To Standard Time Converter
export const unixToStandardConverter = unixTime => {
  // UNIX Time to [DayOfWeek, Month, Day, Y, Military Time, Timezone ]
  let unixTimeConverter = new Date(unixTime * 1000).toString().split(' ');

  // Extract Time From unixTimeConverter variable
  let militaryTime = unixTimeConverter[4].split(':');

  // Remove the 0s from the end of the military time
  let militaryTimeShortened = `${militaryTime[0]}:${militaryTime[1]}`;

  // 1. Check if the time is a.m. or p.m.
  // 2. If a.m., return `military time + a.m`
  // 3. If p.m., return `(military time - 12) + p.m.`

  if (Number(`${militaryTimeShortened[0]}${militaryTimeShortened[1]}`) === 0) {
    return `12:${militaryTimeShortened[3]}${militaryTimeShortened[4]} am`;
  } else if (
    Number(`${militaryTimeShortened[0]}${militaryTimeShortened[1]}`) < 12
  ) {
    return `${militaryTimeShortened} am`;
  } else {
    let standardTime =
      Number(militaryTimeShortened[0] + militaryTimeShortened[1]) - 12;

    standardTime = `${standardTime}:${militaryTimeShortened[3]}${militaryTimeShortened[4]}`;
    return `${standardTime} pm`;
  }
};
