import NavBar from "../components/NavBar"
import rudiger from "../assets/rudiger.jpg"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import ArticleGrid from "../components/ArticleGrid"
export default function HomePage() {
    return (<>
        <NavBar />
        <Banner imageName={rudiger} />
        <ArticleGrid/>
        <Footer/>
    </>)
}