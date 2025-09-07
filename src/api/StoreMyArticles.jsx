import {create} from 'zustand'

const useMyArticles = create((set, get) => ({
    myArticles: [],

    fetchMyArticles: () => {
        const saved = JSON.parse(localStorage.getItem("MyArticles") || "[]")
        set({MyArticles: saved})
    },

    addMyArticle: (article) => {
        set((state) => {
            const newArticle = {
                id:Date.now(),
                ...article
            }
            const updated = [...state.myArticles, newArticle]
            localStorage.setItem("myArticles", JSON.stringify(updated))
            return {myArticles: updated}
        })
    },

    deleteMyArticle: (id) => {
        set((state) => {
            const updated = state.MyArticles.filter((a) => a.id !== id)
            localStorage.setItem("MyArticles", JSON.stringify(updated))
            return {MyArticles: updated}
        })
    }
}))

export default useMyArticles