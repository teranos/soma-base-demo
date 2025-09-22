export const protocolAddresses = {
  treasury:
    import.meta.env.VITE_TREASURY_ADDRESS ?? "0xa7ac4B665e756Ce1575eFDC902Dc2C00bfE8e959",
  registry:
    import.meta.env.VITE_REGISTRY_ADDRESS ?? "0xbC6F9458304d1e951CF953ac9AB567Bd5E185Fc0",
  inquiryManager:
    import.meta.env.VITE_INQUIRY_MANAGER_ADDRESS ?? "0x7BC30f2409e1790eA37Fc9BB9851d29ccaf942C2",
  escrowVault:
    import.meta.env.VITE_ESCROW_VAULT_ADDRESS ?? "0xdFC33798720367F430fc58d662f56a3Edf5e00C3"
};

export const incentiveTokenAddress =
  import.meta.env.VITE_INCENTIVE_TOKEN_ADDRESS ?? "0x4200000000000000000000000000000000000006";

export const networkMeta = {
  label: import.meta.env.VITE_NETWORK_LABEL ?? "Base Sepolia",
  chainId: import.meta.env.VITE_CHAIN_ID ?? "84532"
};
