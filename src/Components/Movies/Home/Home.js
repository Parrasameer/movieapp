
import './Home.css'
import { Banner } from "../Banner/Banner"
import { Navbar } from "../../Navbar/Navbar"
import SearchPanel from '../SearchPanel/SearchPanel'
import MovieCard from '../MovieCard/MovieCard'
import Footer from '../../Footer/Footer'

export function Home() {
    return (
        <div>
            <Navbar />
            <div className="MainHomeContainer">
                <div className="homeContainer">
                    <Banner />
                    <SearchPanel />


                </div>
                <MovieCard />
                <Footer />

            </div>


        </div>
    )
}
