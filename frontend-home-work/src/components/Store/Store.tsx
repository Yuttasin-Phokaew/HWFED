// imageStore.ts
import create from 'zustand';

interface ImageStore {
  profileImage: string | null;
  setProfileImage: (image: string | null) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  profileImage: null,
  setProfileImage: (image) => set({ profileImage: image }),
}));

export default useImageStore;
