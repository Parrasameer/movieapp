import style from './SeatLayout.module.css'
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { bookingActions, bookingSelector } from '../../../Store/Reducers/BookingReducers'
function SeatLayout() {
    const [length4, setLength4] = useState([1, 1, 1, 1])
    const [length6, setLength6] = useState([1, 1, 1, 1, 1, 1])
    const [silverPLus, setSilverPlus] = useState(["G", "F"])
    const availableSeats = ['F6', 'F7', 'F10', 'F3', 'F2', 'G1', 'G2', 'G6', 'G9', 'G10', 'G13', 'F12']
    const selectedSeats = useSelector(bookingSelector)
    const dispatch = useDispatch()
    function seatSelection(seatNo) {


        const copyOfSelectedSeats = [...selectedSeats];
        if (copyOfSelectedSeats.includes(seatNo)) {
            dispatch(bookingActions.unSelect(seatNo))
            dispatch(bookingActions.dePricing())


        } else {
            dispatch(bookingActions.select(seatNo))
            dispatch(bookingActions.pricing())


        }


    }

    return (
        <div className={style.horizontal}>
            {silverPLus.map(r => (
                <div className={style.seat_line1}>
                    <span> {r}</span>
                    <ul className={style.front_seat}>
                        {length4.map((item, i) => (
                            availableSeats.includes(r + (i + 1)) ?
                                <p onClick={() => {
                                    seatSelection(r + (i + 1))
                                }} className={selectedSeats.includes(r + (i + 1)) ? style.selectedSeat : style.available}> <span className={style.seatNo}> {r + (i + 1)}</span> </p> :
                                <p>       <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" /> </p>


                        ))}
                    </ul>
                    <ul className={style.front_seat}>
                        {length6.map((item, i) => (
                            availableSeats.includes(r + (i + 5)) ?
                                <p onClick={() => { seatSelection(r + (i + 5)) }} className={selectedSeats.includes(r + (i + 5)) ? style.selectedSeat : style.available}> <span className={style.seatNo}> {r + (i + 5)}</span> </p> :
                                <p>       <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" /> </p>


                        ))}
                    </ul>
                    <ul className={style.front_seat}>
                        {length4.map((item, i) => (
                            availableSeats.includes(r + (i + 11)) ?
                                <p onClick={() => { seatSelection(r + (i + 11)) }} className={selectedSeats.includes(r + (i + 11)) ? style.selectedSeat : style.available}> <span className={style.seatNo}> {r + (i + 11)}</span> </p> :
                                <p>       <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" /> </p>


                        ))}
                    </ul>

                    <span> {r}</span>
                </div>
            ))} </div>
    )
}


export default SeatLayout