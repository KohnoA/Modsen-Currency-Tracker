export function filterOptions(options: string[], value: string) {
  return options.filter((option) => {
    const valueLower = value.toLowerCase();
    const optionLower = option.toLowerCase();

    if (value.length && valueLower !== optionLower) {
      return optionLower.startsWith(valueLower);
    }

    return false;
  });
}
