import { useEffect } from "react"
import useArticleStore from "../api/StoreApiArticles"
import {Link} from "react-router-dom"

export default function ArticleBody() {
    const {articles, fetchPosts, loading, error} = useArticleStore((state) => state)
    useEffect(() => {
      fetchPosts()
    }, [fetchPosts])

    if(loading) return <p className="text-black">loading...</p>
    if(error) return <p className="text-red-500">Error: {error}</p>

    return (<>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">MyArticles</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
          >
            <Link to={`/article/${article.id}`}>
            <img 
              src={`https://picsum.photos/seed/${article.id}/300/200`} 
              alt={article.title} 
              className="rounded-xl mb-4 w-full h-48 object-cover" 
            />
            <h2 className="text-lg font-semibold mb-2 text-black hover:underline">{article.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-3 hover:underline">{article.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>)}