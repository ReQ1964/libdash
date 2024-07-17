import { create } from 'zustand';

type State = {};

type Actions = {};

const useStore = create<State & Actions>((set) => ({}));

export default useStore;
