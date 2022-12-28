import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import anh1 from "../assets/img/meter1.svg";
import anh2 from "../assets/img/meter2.svg";
import anh3 from "../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
export const Skill = () => {
    const responsives = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        deskTop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        table: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Các Kĩ Năng Của Tôi
                            </p>
                            <Carousel responsive={responsives} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={anh1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={anh2} alt="Image" />
                                    <h5>Java Skills</h5>
                                </div>
                                <div className="item">
                                    <img src={anh3} alt="Image" />
                                    <h5>SQL Skills</h5>
                                </div>
                                <div className="item">
                                    <img src={anh1} alt="Image" />
                                    <h5>Mongoose Skills</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img src={colorSharp} className="background-image-left" />
        </section>

    )
}