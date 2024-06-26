export const formatNumber = (num: number): string => {
  const suffixes = ["", "K", "M", "B", "T", "Q"];
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;
  if (tier === 0) return num.toString();
  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  return scaled.toFixed(1) + suffix;
};
