export default function convertDateToEnUs(date) {
  const dateArray = date.split('/');

  const dateFormatted = `${dateArray[2]}-${dateArray[1].padStart(2, 0)}-${dateArray[0].padStart(2, 0)}`;

  console.log(dateFormatted);

  return dateFormatted;
}
