import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialUserInfo = {
  name: "",
  email: "",
  userTopics: [],
};

export const useFormStore = create(
  persist(
    (set) => ({
      userInfo: initialUserInfo,

      setName: (value) =>
        set((state) => ({
          userInfo: {
            ...state.userInfo,
            name: value,
          },
        })),

      setEmail: (value) =>
        set((state) => ({
          userInfo: {
            ...state.userInfo,
            email: value,
          },
        })),

      toggleTopicOption: (topic) =>
        set((state) => {
          const isSelected = state.userInfo.userTopics.includes(topic);

          return {
            userInfo: {
              ...state.userInfo,
              userTopics: isSelected
                ? state.userInfo.userTopics.filter(
                    (element) => element !== topic
                  )
                : [...state.userInfo.userTopics, topic],
            },
          };
        }),

      resetForm: () =>
        set(() => ({
          userInfo: initialUserInfo,
        })),
    }),
    {
      name: "form-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
