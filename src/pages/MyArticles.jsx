import NavBar from "../components/NavBar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import MyArticleGrid from "../components/MyArticlesGrid"
export default function HomePage() {
    return (<>
        <NavBar />
        <Banner />
        <MyArticleGrid />
        <Footer />
    </>)
}