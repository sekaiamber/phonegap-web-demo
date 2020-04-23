const { $ } = window;

export default function init(url) {
  if (!(url && url.length > 0)) return;
  $('#web').attr('src', url);
}
