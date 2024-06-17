const dateToString = (date) => {
  const weak = {
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
    0: "일요일",
  };

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const weakday = weak[date.getDay()];

  const dateStr = year + "-" + month + "-" + day + " " + weakday;

  return dateStr;
};

export default dateToString;
