import rudiger from '../assets/rudiger.jpg'
import storeLikeDislike from '../store/storeLikeDislike'
import useArticleStore from '../api/StoreApiArticles'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function ArticleBody() {
    const { likes, dislikes, like, dislike } = storeLikeDislike((state) => state)
    const { article, fetchById, loading, error } = useArticleStore((state) => state)
    const { id } = useParams()
    useEffect(() => {
        fetchById(id)
    }, [id, fetchById])

    if (!article) return <p>No article found</p>
    if (loading) return <p className="text-black">loading...</p>
    if (error) return <p className="text-red-500">Error: {error}</p>
    return (<>
        <div className="w-full bg-white flex flex-col items-center pb-3 pt-1">
            <div className="w-2/3 h-auto bg-white flex flex-col items-center">
                <img src={`https://picsum.photos/seed/${article.id}/300/200`} className="w-full"></img>
                <h1 className="text-black text-2xl font-bold pb-2">{article.title}</h1>
                <p className="text-black pb-10">{article.body}</p>
                <div className="flex flexrow gap-2">
                    <button onClick={like} className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> {likes} Like
                    </button>
                    <button onClick={dislike} className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> {dislikes} Dislike
                    </button>
                </div>
            </div>
        </div>
    </>)
}