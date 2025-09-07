import { create } from "zustand"
import {persist} from "zustand/middleware"

const storeLikeDislike = create(
    persist(
        (set) => ({
            likes: 0,
            dislikes: 0,
            like: () => set((state) => ({ likes: state.likes + 1 })),
            dislike: () => set((state) => ({ dislikes: state.dislikes + 1 })),
        }),
        {
            name: "like-dislike-storage",
        }
    ))

export default storeLikeDislike