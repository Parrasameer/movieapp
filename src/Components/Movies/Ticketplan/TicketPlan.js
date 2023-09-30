import Footer from "../../Footer/Footer";
import { Navbar } from "../../Navbar/Navbar";
import { Dropdown } from 'primereact/dropdown';
import { useState, useEffect } from "react";
import "./TicketPlan.css"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookingActions, bookingReducer } from "../../../Store/Reducers/BookingReducers";

function TicketPlan() {
    const { id } = useParams()
    const [selectedCity, setSelectedCity] = useState(null);
    const [cinemas, setCinemas] = useState([])
    const [movies, setMovies] = useState([])
    function handleNamingEvent(e) {
        localStorage.setItem("movieName", e)
    }


    useEffect(() => {
        fetch("http://localhost:4000/api/movie/" + id)
            .then((res) => res.json())
            .then(movies => {
                // ? ThreadPool, MainThread ?
                setMovies(movies);
                console.log(movies)

            }).catch((er) => {
                console.log(er)
            })
    }, []

    )
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    useEffect(() => {
        fetch('http://localhost:4000/api/movie/cinema/' + id)
            .then((res) => res.json())
            .then((parsedRes) => {
                setCinemas(parsedRes)
                console.log(parsedRes)
                console.log(id)


            })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="ticketHeader" >
                <div className="ticketHeaderWrapper"> <div className="movieName" >  {movies.name}</div>
                    <p className="languages"> {movies.languages && movies.languages.join(",")} </p>
                </div>
            </div>
            <div className="ticketFilter">
                <div className="searchOption">
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"></img>
                    <label className="city"> City</label>
                    <Dropdown className="dropdown" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Select a City" />
                </div>
                <div className="searchOption">
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/date.png" alt="" />
                    <label className="city"> Date</label>
                    <Dropdown className="dropdown" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Select a Date" />
                </div>
                <div className="searchOption">
                    <img src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png" alt="" />
                    <label className="city"> Cinema</label>
                    <Dropdown className="dropdown" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Select a Cinema" />
                </div> </div>
            <div className="ticketTableWrapper">
                <div className="ticketTable">

                    <div className="cinematable">

                        {cinemas.length == 0 ? <div className="noTicket"> No titcket available </div> : cinemas.map(el => (
                            <div className="cinemaWrapper">
                                <div className="cinema"> <div > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg> <span> {el.name}</span></div>
                                    <div className="location"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg></div></div>
                                <div className="movieTiming"> {
                                    el.timings.map(t => (<div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${t.movie_id}`}>
                                            {t.time}
                                        </button>
                                        <div className="modal fade" id={t.movie_id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog  modal-dialog-centered">
                                                <div className="modal-content">
                                                    <p className="welcome"> Welcome !</p>
                                                    <p className="seats"> SELECT YOUR SEATS</p>
                                                    <img src="https://pixner.net/boleto/demo/assets/images/movie/seat-plan.png" />


                                                    <div className="modal-footer">

                                                        <a href={`/movie/${t.movie_id}/seatPlan`}> <button onClick={() => {
                                                            handleNamingEvent(movies.name)
                                                        }} type="button" className="btn btn-primary"> SEAT PLANS </button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                                </div> </div>
                        ))}
                        {/* here comes another row */}

                    </div>


                    <div className="advertisment">
                        <img src="https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner03.jpg" />
                    </div>
                </div>

            </div>
            <Footer />
        </div >
    )
}

export default TicketPlan