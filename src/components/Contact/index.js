import React, { useState } from 'react';

function ContactForm() {
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email"></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="message" rows="5"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;