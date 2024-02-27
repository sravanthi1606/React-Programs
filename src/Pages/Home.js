import React from "react";

const Home = ()=>{
    return(
        <div>
            <section id="home">
                <div className="home_info">
                    <h4 className="home_h4">Hello,my name is</h4>
                    <h1 className="home_h1">Sravanthi <span className="home_h1_span">Maturi</span></h1>
                    <h3 className="home_h3">Frontened Developer</h3>
                    <p a className="home_p"><a className="home_p_a" href="/about">Click Here</a> to Known more about me</p>
                </div>
            </section>
        </div>
    )
}
export default Home;