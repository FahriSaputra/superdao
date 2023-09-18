interface Option {
  firstWordEnd?: number;
  lastWordStart?: number;
}

export const walletFormater = (wallet: string, option?: Option) => {
  const firstWord = wallet.slice(0, option?.firstWordEnd || 5);
  const lastWord = wallet.slice(
    wallet.length - (option?.lastWordStart || 4),
    wallet.length
  );

  return `${firstWord}...${lastWord}`;
};
