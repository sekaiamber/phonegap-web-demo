const { $ } = window;

export function message(msg) {
  $('#loading').append(`<div>${msg}</div>`);
}
