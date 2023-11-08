export const currentYear = new Date().getFullYear();

export const yearsPagination = [..."0".repeat(currentYear - 2010 + 2)]
  .map((_, i) => (i ? String(2010 + i - 1) : "до 2010"))
  .reverse()