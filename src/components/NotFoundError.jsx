import {Link} from "react-router-dom"
export default function() {
    return <div className="text-black h-lvh w-full flex flex-col items-center justify-center font-bold">404 not found
        <Link to="/" className="text-black hover:bg-black hover:text-white">Home</Link>
    </div>
    
}