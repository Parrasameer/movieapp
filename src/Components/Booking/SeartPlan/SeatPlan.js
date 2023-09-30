

import style from "./SeatPlan.module.css"
import Pricing from "../Pricing"
import SeatLayout from "../SeatLayout/SeatLayout"
import { useEffect } from "react"
import SeatHeader from "./SeatHeader"
import Footer from "../../Footer/Footer"
function SeatPlan() {
    // const [seats, setSeats] = useState([])
    // // function handleChild(data) {
    // //     setSeats(data)
    // // }





    return (


        <div>
            <SeatHeader />

            <div className={style.screenAreaWrapper}>
                <div className={style.screenArea}>
                    <div className={style.screen}>

                        <p className={style.screen_name}> screen</p>
                    </div>
                    <div className={style.screen_thumb}>
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png" />

                    </div>
                    <div className={style.silver_wrapper}>
                        <div className={style.silver_name}>
                            silver plus
                        </div>
                    </div>
                    <div className={style.seat_wrapper}>
                        <SeatLayout />


                        <div className={style.silver_wrapper}>
                            <div className={style.silver_name}>
                                gold plus
                            </div>
                        </div>
                        <div className={style.horizontal}>
                            <div className={style.seat_line2}>
                                <span>E</span>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>

                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <span> E</span>

                            </div>
                            <div className={style.seat_line2}>
                                <span>D</span>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>

                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <span> D</span>

                            </div>
                            <div className={style.seat_line2}>
                                <span>C</span>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>

                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <span> C</span>

                            </div>
                            <div className={style.seat_line2}>
                                <span>B</span>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>

                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <span> B</span>

                            </div>
                            <div className={style.seat_line2}>
                                <span>A</span>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>

                                </ul>
                                <ul className={style.middle_seat}>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                    <li> <img src="https://pixner.net/boleto/demo/assets/images/movie/seat02.png" /></li>
                                </ul>
                                <span> A</span>

                            </div>
                        </div>
                        <Pricing />

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SeatPlan