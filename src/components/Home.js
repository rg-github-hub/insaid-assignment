import AboutUs from "./AboutUs";
import Carousal from "./Carousal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home(){
    return <>
        <Navbar></Navbar>
        {/* <LoginForm></LoginForm> */}
        <Carousal></Carousal>
        <div className="container">Since 1991, Edutech is a leading provider of World Class educational equipments, digital learning solutions and services for academic institutions, corporates & government initiatives.</div>
        <figure className="text-center">
        <blockquote className="blockquote">
            <p>Education is mother of Leadership</p>
        </blockquote>
        <figcaption className="blockquote-footer">
            <cite title="Source Title">Wendell Willkie</cite>
        </figcaption>
        </figure>
        <div className="container"><AboutUs></AboutUs></div>
        <div><p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p></div>
        <Footer></Footer>
    </>;
}