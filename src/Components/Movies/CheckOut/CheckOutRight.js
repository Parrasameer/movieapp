import styles from "./CheckOutRight.module.css"

function CheckOutRight() {
    const movieName = localStorage.getItem("movieName")
    return (
        <div className={styles.container}>
            <div className={styles.booking}>
                <h4> BOOKING SUMMERY</h4>
                <section className={styles.movieName}>
                    <span> {movieName}</span>
                    <p> ENGLISH-2D</p>
                </section>
                <div className={styles.location}>
                    <span> CITY WALK</span>
                    <p> 02</p>
                </div>
                <div className={styles.time}>
                    <p> 10 SEP TUE, 11:00 PM</p>
                    <p> TICKETS</p>
                </div>
                <div className={styles.location1}>
                    <span> TICKETS PRICE</span>
                    <p> $150</p>
                </div>
                <div className={styles.location1}>
                    <span> COMBOS</span>
                    <p> $57</p>
                </div>
                <div className={styles.nacho}>
                    2 NACHOS COMBO
                </div>
                <p className={styles.food}>
                    FOOD & BEVARAGE
                </p>
                <div className={styles.time}>
                    <p> PRICE</p>
                    <p> $207</p>
                </div>
                <div className={styles.time}>
                    <p> VAT</p>
                    <p> $15</p>
                </div>
                <div className={styles.amount}>
                    <div className={styles.amountText}>
                        <span> AMOUNT PAYABLE</span>
                        <p> $222</p>
                    </div>
                    <div className={styles.proccedbtn}>
                        <button className={styles.procced}> PROCEED</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckOutRight