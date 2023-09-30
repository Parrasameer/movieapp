import style from "./CheckOut.module.css"
import SeatHeader from "../../Booking/SeartPlan/SeatHeader"
import CheckOutRight from "./CheckOutRight"
import Footer from "../../Footer/Footer"

function CheckOut() {
    return (
        <div>
            <SeatHeader />
            <div className={style.containerWrapper}>
                <div className={style.container}>
                    <div className={style.leftContainer}>
                        <div className={style.memberWrapper}>
                            <section className={style.member}>
                                <div className={style.memberText}>
                                    <p> Already a Boleto Member?</p>
                                    <p> Sign in to earn points and make booking easier!

                                    </p>
                                </div>
                                <div className={style.memberButton}>
                                    <a href="/signin"> Sign in</a>
                                </div>
                            </section>
                        </div>
                        <div className={style.contactWrapper}>
                            <div className={style.contact}>
                                <h2> Share your Contact Details </h2>
                                <div className={style.Contactflex}>
                                    <p> <input type="text" placeholder="Full Name" /></p>
                                    <p > <input type="text" placeholder="Enter your email" /></p>

                                </div>
                                <div className={style.Contactflex} >
                                    <p> <input type="text" placeholder="Enter your phone number" /></p>
                                    <div> <a href="/"> Continue</a></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.promoWrapper}>
                            <div className={style.contact}>
                                <h2> Promo Code </h2>

                                <div className={style.Contactflex} >
                                    <p> <input type="text" placeholder="Please enter promo code" /></p>
                                    <div> <a href="/"> Verify</a></div>
                                </div>
                            </div> </div>
                        <div className={style.paymentWrapper}>
                            <section className={style.payment}>
                                <h2> Payment Option</h2>
                                <div className={style.paymentPhotos}>
                                    <a href="##">  <div className={style.paymentPhoto}>
                                        <img src="https://pixner.net/boleto/demo/assets/images/payment/card.png" />
                                        <p> Credit Card</p>
                                    </div></a>
                                    <div className={style.paymentPhoto}>
                                        <img src="https://pixner.net/boleto/demo/assets/images/payment/card.png" />
                                        <p> Debit Card</p>
                                    </div>
                                    <div className={style.paymentPhotoPaypal}>
                                        <img src="https://pixner.net/boleto/demo/assets/images/payment/paypal.png" />
                                        <p> Pay Pal</p>
                                    </div>

                                </div>
                                <div className={style.card}>
                                    <h5>  Enter Your Card Details</h5>
                                    <section className={style.cardDetails}>
                                        <p> Card Details</p>
                                        <input type="text" />
                                    </section>
                                    <section className={style.cardDetails}>
                                        <p> Name on the Card</p>
                                        <input type="text" />
                                    </section>
                                    <section className={style.cardSecurity}>
                                        <section className={style.secure}>
                                            <p> Expiration</p>
                                            <input type="text" placeholder="MM/YY" />
                                        </section>
                                        <section className={style.secure}>
                                            <p> CVV</p>
                                            <input type="text" placeholder="CVV" />
                                        </section>

                                    </section>
                                    <div className={style.quickPay}>
                                        <section> <input type="radio" /></section>
                                        <section className={style.quickPayText}> <h6> QuickPay</h6>
                                            <p>Save this card information to my Boleto account and make faster payments.</p></section>


                                    </div>
                                    <button className={style.makePay} > MAKE PAYMENT</button>
                                    <p> By Clicking "Make Payment" you agree to the <a href="##"> Terms and conditions</a></p>
                                    <div></div>


                                </div>
                            </section> </div>

                    </div>
                    <div className={style.rightContainer}>
                        <CheckOutRight />

                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}
export default CheckOut

