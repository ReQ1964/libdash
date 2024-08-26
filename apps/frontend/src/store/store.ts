import { create } from 'zustand';

interface ZustandState {
  username: string;
}

interface Actions {
  updateUsername: (name: ZustandState['username']) => void;
}

const useStore = create<ZustandState & Actions>((set) => ({
  username: '',
  updateUsername: (name) => {
    set(() => ({ username: name }));
  },
}));

export default useStore;
