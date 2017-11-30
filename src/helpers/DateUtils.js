export const isoToLongDate = isoDate => {
  const pad = n => (n < 10 ? '0' + n : '' + n);

  let date = new Date(Date.parse(isoDate)),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hours = date.getHours(),
    mins = date.getMinutes(),
    dateStr = pad(day) + '/' + pad(month) + '/' + year,
    timeStr = pad(hours) + ':' + pad(mins);

  return dateStr + ' ' + timeStr;
};
