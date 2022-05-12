export function videoDate(date, dateToday) {
  const newDate = date.split("T")[0];
  

  if (dateToday.getFullYear() != newDate.split("-")[0]) {
    return (`${dateToday.getFullYear() - newDate.split("-")[0]} years ago`);
  } else if (dateToday.getMonth() + 1 != newDate.split("-")[1]) {
    return (
      `${dateToday.getMonth() + 1 - newDate.split("-")[1]} months ago`
    );
  }else{
    return (`${dateToday.getDate() - newDate.split("-")[2]} days ago`);
  }
  
}
