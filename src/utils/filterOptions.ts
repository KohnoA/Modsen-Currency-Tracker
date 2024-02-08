export function filterOptions(options: string[], value: string) {
  if (!value.length) return [];

  return options.filter((option) => {
    const valueLower = value.toLowerCase();
    const optionLower = option.toLowerCase();

    if (valueLower !== optionLower) {
      return option.toLowerCase().startsWith(value.toLowerCase());
    }

    return false;
  });
}
