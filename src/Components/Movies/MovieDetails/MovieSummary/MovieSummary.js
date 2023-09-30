import { useState } from "react"
import styless from "./MovieSummary.module.css"



function MovieSummary(props) {
    const [summary, setSummary] = useState(true)
    const [review, setReview] = useState(false)
    function userReview() {
        setReview(true)
        setSummary(false)
    }
    function summery() {
        setReview(false)
        setSummary(true)
    }
    function classS() {
        if (summary) {
            return styless.green
        }


    }
    function classU() {
        if (review) {
            return styless.green
        }


    }
    return (
        <div >

            <div className={styless.header}>
                <div className={styless.Dwrapper}>
                    <button className={styless.btn} > 2D</button>
                    <button className={styless.btn}> IMAX 2D</button>
                    <button className={styless.btn}> 4DX</button>
                </div>
            </div>
            <div className={styless.summary}>
                <div className={styless.offers}>
                    <p className={styless.pHeader}  > Applicable Offer</p>
                    <div className={styless.offerCard}>
                        <img src="https://pixner.net/boleto/demo/assets/images/sidebar/offer01.png" />
                        <p className={styless.pCash}> Amazon Pay Cashback Offer</p>
                        <p className={styless.pWin}> Win Cashback Upto Rs 300*</p>
                    </div>
                    <div className={styless.offerCard}>
                        <img src="https://pixner.net/boleto/demo/assets/images/sidebar/offer02.png" />
                        <p className={styless.pCash}> PayPal Offer</p>
                        <p className={styless.pWin}>Transact first time with Paypal and get 100% cashback up to Rs. 500</p>
                    </div>
                    <div className={styless.offerCard}>
                        <img src="https://pixner.net/boleto/demo/assets/images/sidebar/offer03.png" />
                        <p className={styless.pCash}> HDFC Bank Offer</p>
                        <p className={styless.pWin}> Get 15% discount up to INR 100* and INR 50* off on F&B T&C apply</p>
                    </div>

                </div>




                <div className={styless.photos}>
                    <div className={styless.tab}>
                        <p onClick={summery} className={classS()}> Summery</p>
                        <p onClick={userReview} className={classU()}> User Review(121)</p>
                    </div>
                    {summary && <div className={styless.summery}>
                        <h3> SYNOPSIS</h3>
                        {props.movies.description}
                    </div>}
                    {review && props.movies.userReviews.map((el) => (
                        <div className={styless.review}>


                            <div className={styless.reviewPic}>

                                <img src={el.userProfilePicUrl} />
                            </div>
                            <div className={styless.reviewName}>
                                <div> 13 days ago </div>
                                <div className={styless.reviewNamer}> {el.name} </div>

                            </div>

                            <div className={styless.reviewComment}>

                                <div className={styless.heart}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </div>
                                <div className={styless.commentHead}> Awesome Movie   </div>
                                <div className={styless.comment}> {el.comment}</div>

                            </div>




                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}


export default MovieSummary