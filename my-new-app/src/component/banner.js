import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const toRotate = ["Sleep", "Code", "Eat"]
    const [loopnum, setloopnum] = useState(0)
    const [isdeleting, setdeleting] = useState(false)
    const [text, settext] = useState('')
    const [delta, setdelta] = useState(300 - Math.random * 100)
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    })

    const tick = () => {
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updatetext = isdeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1)

        settext(updatetext)

        if (isdeleting) {
            setdelta(prev => prev / 2)

        }

        if (!isdeleting && updatetext === fulltext) {
            setdeleting(true)
            setdelta(period)

        }
        else if (isdeleting && updatetext === '') {
            setdeleting(false)
            setloopnum(loopnum + 1)
            setdelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align - items - center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome To My webSite
                        </span>
                        <h1>
                            {`If You Want...`} <span className="wrap">{text}
                            </span>
                            <p>Đang Tập Code.....</p>
                        </h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}