import React from 'react'
import errorImage from "../Images/errorImage.png"
import "./WineDetailsPage.css";

export default function ErrorPage404() {
    return (
        <div className="error-page is-flex m-auto">  
            <h1 className="errorText">Error 404</h1>
            <p>Sorry, the page you are looking for does not exist.<p>
            <img src={errorImage} alt="404" className="errorImage2" />
        </div>
    )
}
