import  "./Styles.css"
import movie1 from "../assets/movie1.jpg"
import movie2 from "../assets/movie2.jpg"
import movie3 from "../assets/movie3.jpg"

function Content() {
    return (
        <>
            <section className="content">
                <h2>Now Showing</h2>

                <div className="movie-container">

                    <div className="movie-card">
                        <img src={movie1} alt="Movie 1" />
                        <h3>Avengers-EndGame</h3>
                        <p>⭐ 4.5 / 5</p>
                        <button>Book Now</button>
                    </div>

                    <div className="movie-card">
                        <img src={movie2} alt="Movie 2" />
                        <h3>Captain Marvel</h3>
                        <p>⭐ 4.3 / 5</p>
                        <button>Book Now</button>
                    </div>

                    <div className="movie-card">
                        <img src={movie3} alt="Movie 3" />
                        <h3>Avengers-Infinity War</h3>
                        <p>⭐ 4.7 / 5</p>
                        <button>Book Now</button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Content

