import articles from "../api/ArticleMock"
export default function ArticleBody() {
    return (<>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">Articles</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
          >
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="rounded-xl mb-4 w-full h-48 object-cover" 
            />
            <h2 className="text-lg font-semibold mb-2 text-black">{article.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>)}