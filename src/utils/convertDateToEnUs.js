export default function convertDateToEnUs(date) {
  if (!date) return null;

  const dateArray = date.split('/');

  const dateFormatted = `${dateArray[2]}-${dateArray[1].padStart(2, 0)}-${dateArray[0].padStart(2, 0)}`;

  return dateFormatted;
}
