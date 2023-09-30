
import { useSelector } from "react-redux"
import style from "./Pricing.module.css"
import { bookingSelector, bookingSelectorPrice } from "../../Store/Reducers/BookingReducers"

function Pricing() {
    const selectedSeats = useSelector(bookingSelector).join(",")
    const price = useSelector(bookingSelectorPrice)

    return (
        <div className={style.procced_wrapper}>
            <div className={style.procced}>
                <div> <p className={style.text}> You Have Choosed Seat</p>
                    <p className={style.procced_grn}>{selectedSeats}</p></div>
                <div>
                    <p className={style.text}> Total Price</p>
                    <p className={style.procced_grn}> {price}</p>
                </div>
                <div className={style.procced_btn}> <a href="/checkOut"> PROCCED</a></div>
            </div>
        </div>
    )
}

export default Pricing