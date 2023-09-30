import { Navbar } from "../../Navbar/Navbar"
import style from "./SeatHeader.module.css"

function SeatHeader() {
    const Moviename = localStorage.getItem("movieName")
    return (
        <div>
            <Navbar />
            <div className={style.header}>
                <div className={style.headerText}>
                    <div >
                        <div className={style.movieName}> {Moviename}</div>
                        <div className={style.cinemaName}> City walk | English-2D</div>
                    </div>
                </div>
            </div>
            <div className={style.timing}>
                <div className={style.timingContainer}>
                    <div className={style.back}> <a href="#" >{'<< BACK '}</a></div>
                    <div className={style.time}>
                        <div> MON,SEP 09 2023</div>
                        <div className={style.clock}> <select>
                            <option selected> 09:40 </option>
                            <option> 10:40</option>
                            <option> 02:30</option>
                            <option> 06:10</option>
                        </select> </div>
                    </div>
                    <div className={style.timeLeft}>
                        <div className={style.clock_Time}> 05:00</div>
                        <div className={style.minsLeft}> Mins Left</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SeatHeader