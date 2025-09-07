import police from '../assets/police.jpg'
export default function Banner() {
    return (<>
        <div className="bg-purple-500 w-full h-96 bg-center flex flex-col items-center pt-20" 
        style={{ backgroundImage: `url(${police})` }}>
            <h1 className="text-white text-shadow-black text-shadow-md text-3xl font-bold">Breaking News</h1>
        </div>
        
    </>)
}