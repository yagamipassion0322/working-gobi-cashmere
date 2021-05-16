import React from 'react'
import css from '../style/subscribe.css'

function subscribe() {
    return (
        <div className="subscribeContainer">
            <h1>Subscribe</h1>
            <p>Sign up for emails and recieve early access to new arrivals, sales, events + more.</p>
            <div className="SubscribeBox">
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Submit</button>
            </div>
            <p>
                By signing up, you will receive Gobi Cashmere offers., promotions and other commercial messages. You are also agreeing to gobi Cashmere's <b>Privacy policy</b>. You may unsubscribe at any time.
            </p>
        </div>
    )
}

export default subscribe
