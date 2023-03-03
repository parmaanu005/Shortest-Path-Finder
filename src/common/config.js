// UI configuration

// colors
export const cellColor = "white";
export const wallColor = "black";
export const entryColor = "purple";
export const exitColor = "red";
export const searchColor = "lightpink";
export const pathColor = "yellow";

// Maximum Dimensions
export const minRows = 5;
export const minColumns = 5;

// Maximum Dimensions - web
export const maxRows = 30;
export const maxColumns = 60;

// Maximum Dimensions - mobile
const maxRowsMobile = 25;
const maxColumnsMobile = 60;

// box size
export const cellWidth = 40;
export const cellGap = 3;

// Global settings for app (modify below, iff you know what you are doing)

export const cellType = 0;
export const wallType = 1;
export const entryType = 2;
export const exitType = 3;
export const searchType = 4;
export const pathType = 5;

export const clickTypeToColorMap = new Map([
  [cellType, cellColor],
  [wallType, wallColor],
  [entryType, entryColor],
  [exitType, exitColor],
  [searchType, searchColor],
  [pathType, pathColor],
]);

// Rows, Columns options for mobile
export const rowsOptions = Array.from(
  new Array(maxRowsMobile - minRows + 1),
  (_, i) => String(i + minRows)
);
export const colsOptions = Array.from(
  new Array(maxColumnsMobile - minColumns + 1),
  (_, i) => String(i + minColumns)
);
