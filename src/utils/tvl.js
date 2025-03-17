export const getTvlForVaultFromTvlList = (tvls = [], vaultAddress = "") => {
    const tvl = tvls?.find(item => item?.trancheVaultAddress?.toLowerCase() === vaultAddress?.toLowerCase());
    return tvl?.tvl ? parseFloat(tvl?.tvl).toFixed(2) : "-";
}