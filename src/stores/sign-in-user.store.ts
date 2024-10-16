import { SingInUser } from "src/types";
import { create } from "zustand";

interface SignInUserStore {
    signInUser: SingInUser | null;
    setSignInUser: (signInUser: SingInUser | null) => void
}

const useStore = create<SignInUserStore>(set => ({
    signInUser: null,
    setSignInUser: (signInUser: SingInUser | null) => set(state => ({ ...state, signInUser }))
}));

export default useStore;