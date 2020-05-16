const { $ } = window;

export function message(msg) {
  $('#loading').append(`<div>${msg}</div>`);
}

export function getHourSign() {
  const d = new Date().getTime();
  if (__DEV__) {
    return d;
  }
  return parseInt(d / 1000 / 60 / 60, 10) * 1000 * 60 * 60 + 101;
}
