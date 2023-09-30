
import { useEffect, useState } from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom';

function MovieCard() {
    const [showFull, setShowFull] = useState(false);

    function toggleShowFull() {
        setShowFull(!showFull);
    };
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('/moviesData.json')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []

    )
    console.log(movies)
    return (
        <div className='main'>
            <div className='filter'>
                <img src='https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner01.jpg' alt="image" />
                <div className='FilterText'> <p> Filter By</p> <span> Clear All</span></div>
                <div className='filters'>
                    <div className='filtersHeader'>
                        <p> Language</p>
                        <hr />
                    </div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> English</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Telegu</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Urdu</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Hindi</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Kashmiri</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Gujrati</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Bangali</label></div>





                </div>
                <div className='filters'>
                    <div className='filtersHeader'>
                        <p> Experience</p>
                        <hr />
                    </div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> 2D</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> 3D</label></div>
                </div>
                <div className='filters'>
                    <div className='filtersHeader'>
                        <p> Genre</p>
                        <hr />
                    </div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Thriller</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Horror</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Romantic</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Action</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Comedy</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Animations</label></div>
                    <div className='filters_input'>   <input type='checkbox' /> <label> Adventure</label></div>





                </div>
                <img src='https://pixner.net/boleto/demo/assets/images/sidebar/banner/banner02.jpg' alt="advertisment" />
            </div>

            <div className='movies'>

                <div className="row">
                    {movies.map(m => (


                        <div key={m._id} className="col-xs-12 col-sm-6 col-md-4 moviesCards ">
                            <a href={`/movie/${m._id}`}>  <div key={m._id} className='moviesImg '><img src={m.posterUrl} alt="iamge" />

                            </div>
                                <div className='imagewrapper'>
                                    <p onClick={toggleShowFull}>
                                        {showFull
                                            ? m.name
                                            : m.name.length > 12
                                                ? m.name.slice(0, 12) + '...'
                                                : m.name}
                                    </p>
                                    <div className='rating'>
                                        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png' alt="tomato" />
                                        <span> {m.rating} </span>

                                        <img src='https://pixner.net/boleto/demo/assets/images/movie/cake.png' alt="cake" />
                                        <span> {m.rating}</span>


                                    </div>
                                </div> </a>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default MovieCard