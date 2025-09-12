import { create } from "zustand"
import { persist } from "zustand/middleware"

const storeLikeDislike = create(
    persist(
        (set, get) => ({
            posts: [],

            setPosts: (posts) => set({ posts }),

            like: (id) =>
                set((state) => ({
                    posts: state.posts.map((post) =>
                        post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
                    ),
                })),

            dislike: (id) =>
                set((state) => ({
                    posts: state.posts.map((post) =>
                        post.id === id ? { ...post, dislikes: (post.dislikes || 0) + 1 } : post
                    ),
                })),

            getPostById: (id) => {
                const { posts } = get();
                return posts.find((post) => post.id === id);
            },

            deletePostById: (id) => {
                set((state) => ({
                    posts: state.posts ? state.posts.filter((post) => post.id !== id) : [],
                }))
            },

            addNewPost: (post) =>
                set((state) => ({
                    posts: [...state.posts, post],
                }))
        }),

        {
            name: "like-dislike-storage",
        }
    ))

export default storeLikeDislike