import { create } from "zustand"
import {persist} from "zustand/middleware"

const storeLikeDislike = create(
    persist(
        (set, get) => ({
            posts: [],

            setPosts: (posts) => set({posts}),

            like: (id) =>
                set((state) => ({
                    posts: state.posts.map((post) => 
                    post.id === id ? {...post, likes: (post.likes || 0) + 1} : post
                ),
            })),

            dislike: (id) => 
                set((state) => ({
                    posts: state.posts.map((post) => 
                    post.id === id ? {...post, dislikes: (post.dislikes || 0) + 1} : post
                ),
            })),

            getPostById: (id) => {
                const {posts} = get();
                return posts.find((post) => post.id ===id);
            },
        }),

        {
            name: "like-dislike-storage",
        }
    ))

export default storeLikeDislike