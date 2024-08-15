/* eslint-disable @typescript-eslint/no-empty-interface -- still not built */
import { create } from 'zustand';

interface ZustandState {}

interface Actions {}

const useStore = create<ZustandState & Actions>((_set) => ({}));

export default useStore;
