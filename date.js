module.exports = getDate;

function getDate() {
  const today = new Date();
  //const now = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("bn-BD", options);
}
