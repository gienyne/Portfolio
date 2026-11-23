export function Button({
  label,
  href = null,
  variant = "secondary",
  icon = "",
  external = false,
  download = false,
  type = "button",
  extraClass = "",
}) {
  const classes = `button button-${variant} ${extraClass}`.trim();
  const iconHtml = icon ? `<i class="${icon}"></i>` : "";
  const content = `${iconHtml}<span>${label}</span>`;

  if (href) {
    const target = external ? ' target="_blank" rel="noopener"' : "";
    const downloadAttr = download ? " download" : "";
    return `<a class="${classes}" href="${href}"${target}${downloadAttr}>${content}</a>`;
  }

  return `<button class="${classes}" type="${type}">${content}</button>`;
}