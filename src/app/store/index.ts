import { create } from 'zustand';

export const useWallet = create(set => ({
    wallet: {
        connected: false,
        address: ""
    },
    loading: false,
    error: null,
    setWallet: (address: string) => set(() => ({wallet: {connected: true, address}}))
}))