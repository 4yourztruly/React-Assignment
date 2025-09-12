import { create } from "zustand"

const useArticleStore = create((set) => ({
    articles: [],
    loading: false,
    error: null,

    fetchPosts: async () => {
        set({ loading: true, error: null })
        try {
            const res = await fetch("https://dummyjson.com/posts")
            const data = await res.json()
            set({ articles: data.posts, loading: false })
        } catch (e) {
            set({ error: e.message, loading: false })
        }
    },

    fetchById: async (id) => {
        set({ loading: true, error: null })
        try {
            const res = await fetch(`https://dummyjson.com/posts/${id}`)
            const data = await res.json()
            set({ article: data, loading: false })
        } catch (e) {
            set({ error: e.message, loading: false })
        }
    },
}))

export default useArticleStore