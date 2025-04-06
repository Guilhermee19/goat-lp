import clsx from 'clsx';
import React from 'react';

type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

export const icons = {
  loading: `<svg class="svg-inline--fa fa-spinner-third fa-spin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32V0zM422.3 352c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7L422.3 352zM256 64c106 0 192 86 192 192h64C512 114.6 397.4 0 256 0V64zM448 256c0 35-9.4 67.8-25.7 96L477.7 384c21.8-37.7 34.3-81.5 34.3-128H448z"></path></svg>`,
  home: `<svg class="svg-inline--fa fa-house" aria-hidden="true" focusable="false" data-prefix="far" data-icon="house" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V245.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224z"></path></svg>`,
  search: `<svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208z"></path></svg>`,
  user: `<svg class="svg-inline--fa fa-user" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg>`,
  eye: `<svg class="svg-inline--fa fa-eye" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>`,
  eye_cancel: `<svg class="svg-inline--fa fa-eye-slash" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="eye-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z"></path></svg>`,
  zap: `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.58333 0.666626L0.75 10.6666H6L5.41667 17.3333L11.25 7.33329H6L6.58333 0.666626Z" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
  arrow_right: `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.91699 8H11.0837" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7 3.33337L11.0833 8.00004L7 12.6667" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/> </svg>`,
  toggle_off: `<svg class="svg-inline--fa fa-toggle-off" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M416 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-256 0C89.3 384 32 326.7 32 256s57.3-128 128-128l256 0zM576 256c0-88.4-71.6-160-160-160L160 96C71.6 96 0 167.6 0 256s71.6 160 160 160l256 0c88.4 0 160-71.6 160-160zm-352 0A64 64 0 1 1 96 256a64 64 0 1 1 128 0zM64 256a96 96 0 1 0 192 0A96 96 0 1 0 64 256z"></path></svg>`,
  chart_pie_simple: `<svg class="svg-inline--fa fa-chart-pie-simple" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-pie-simple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 17.7l0 9.4L256 240c0 8.8 7.2 16 16 16l222.3 0c9.6 0 17.7-7.4 17.7-17.1C512 107 405 0 273.1 0C263.4 0 256 8.1 256 17.7zm32 14.8C390.4 39.8 472.2 121.6 479.5 224L288 224l0-191.5zM192 288c0 17.7 14.3 32 32 32l218.4 0C420.8 411.7 338.3 480 240 480C125.1 480 32 386.9 32 272c0-98.3 68.3-180.8 160-202.4L192 288zM224 66.7c0-18.5-15.7-33.3-33.8-29.5C81.5 60.1 0 156.5 0 272C0 404.6 107.5 512 240 512c115.5 0 211.9-81.5 234.8-190.2c3.8-18.1-11-33.8-29.5-33.8L256 288l-32 0 0-32 0-189.3z"></path></svg>`,
  loader: `<svg class="svg-inline--fa fa-loader" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="loader" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M272 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 384l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zM0 256c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm400-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM437 75c6.2 6.2 6.2 16.4 0 22.6l-67.9 67.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0zM165.5 369.1L97.6 437c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l67.9-67.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM75 75c6.2-6.2 16.4-6.2 22.6 0l67.9 67.9c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6zM369.1 346.5L437 414.4c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-67.9-67.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z"></path></svg>`,
  table_pivot_edit: `<svg class="svg-inline--fa fa-table-pivot" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table-pivot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">  <path fill="currentColor" d="M160 64l0 96 320 0 0-64c0-17.7-14.3-32-32-32L160 64zm0 128l0 256 288 0c17.7 0 32-14.3 32-32l0-224-320 0zM128 64L64 64C46.3 64 32 78.3 32 96l0 64 96 0 0-96zM32 416c0 17.7 14.3 32 32 32l64 0 0-256-96 0 0 224zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"></path></svg>`,
  cart_shopping: `<svg class="svg-inline--fa fa-cart-shopping" aria-hidden="true" focusable="false" data-prefix="far" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path></svg>`,
  code_simple: `<svg class="svg-inline--fa fa-code-simple" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-simple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6zm146.7 0L498.7 256 361.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3z"></path></svg>`,
  circle_chevron_right: `<svg class="svg-inline--fa fa-circle-chevron-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path></svg>`,
  arrow_down: `<svg class="svg-inline--fa fa-arrow-down" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M180.7 475.3c6.2 6.2 16.4 6.2 22.6 0l176-176c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 425.4 208 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 377.4L27.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176z"></path></svg>`,
  arrow_up_right: `<svg class="svg-inline--fa fa-arrow-up-right" aria-hidden="true" focusable="false" data-prefix="fat" data-icon="arrow-up-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M344 96c4.4 0 8 3.6 8 8l0 240c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-220.7L45.7 413.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 112 104 112c-4.4 0-8-3.6-8-8s3.6-8 8-8l240 0z"></path></svg>`,
  check: `<svg class="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>`,
  computer: `<svg class="svg-inline--fa fa-display" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="display" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l167.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L512 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L64 32zM213.1 416L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-149.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-72 0-144 0-72 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64zm32.4 0l-10.7 64 106.2 0-10.7-64-84.9 0z"></path></svg>`,
  cellphone: `<svg class="svg-inline--fa fa-mobile-button" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="mobile-button" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M96 32C78.3 32 64 46.3 64 64l0 384c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L96 32zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg>`,
  circle_info: `<svg class="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>`,
  star: `<svg class="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>`,
};

const Icon: React.FC<IconProps> = React.memo(({ name, className }) => {
  const svgMarkup = icons[name] || icons['home'];

  return (
    <span
      className={clsx('icon block', className)}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
