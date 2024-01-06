export function timeAgoCalculator(time) {
  const dateTime = typeof time === "string" ? new Date(time) : time;
  const currentTime = new Date();
  const timeDifferenceInMilliSecond = currentTime - dateTime;

  const minutesDifference = Math.floor(
    timeDifferenceInMilliSecond / (1000 * 60)
  );
  const hoursDifference = Math.floor(
    timeDifferenceInMilliSecond / (1000 * 60 * 60)
  );
  const daysDifference = Math.floor(
    timeDifferenceInMilliSecond / (1000 * 60 * 60 * 24)
  );

  const pluralize = (count, noun) =>
    `${count} ${noun}${count !== 1 ? 's' : ''} ago`;

  if (minutesDifference < 60) {
    return pluralize(minutesDifference, "minute");
  } else if (hoursDifference < 24) {
    return pluralize(hoursDifference, "hour");
  } else {
    return pluralize(daysDifference, "day");
  }
}
