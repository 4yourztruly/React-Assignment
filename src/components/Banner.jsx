export default function Banner({imageName}) {
    return (<>
        <div className="bg-purple-500 w-full h-96 bg-center flex flex-col items-center pt-20" 
        style={{ backgroundImage: `url(${imageName})` }}>
            <h1 className="text-white text-3xl font-bold">Breaking News</h1>
        </div>
        
    </>)
}