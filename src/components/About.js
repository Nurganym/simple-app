import React from "react";
import '../styles/About.scss';
import image1 from '../assets/about-3.jpg';
import image2 from '../assets/about-2.jpg';
import image3 from '../assets/kiwi.jpg';




const About = () => {
    return(
        <div className="about">
            <h1>Hi, we're Spoon!
            We're leading a parade for kitchen creativity, and reimagining the ingredents that help chefs shine.</h1>
            <div className="content">
                <div className="content-image"></div>
                <div className="content-text">
                    <p>Spoon is a new way to have fun with food, your hands and your heart.Because making stuff makes us happy.So if that's your thing, too, then climb on board - this is going to be good.</p>
                </div>
            </div>
            <div className="content-rows">
               <div className="content-rows_img">
                   <img src={image1} alt="dumpling" width="592px" />
               </div>
               <div className="content-rows_text">
                   <h2>No nasties.</h2>
                   <p>Colors rule. Sprinkles are magic. But a lot of baking ingredients make perfectly good treats cringeworthy, and not just kinda. Artificial colors, preservatives and other usual suspects have ties to cancer, ADHD, allergies and more. So it's no wonder we wished for something better. It took a few years, but nature delivered (like the O.G. rainbow maker would ever let us down). And trust us: We're just getting started.</p>
               </div>
               <div className="content-rows_text">
                   <h2>High achievers.</h2>
                   <p>The kitch: It's hot, it's happening, and it's our job to help your culinary creativity shine. When we first set off on that mission, plant-based hues were as bold as an old couch. So we hunted hard for natural sources with strength. Followed the rainbow, you could say. And discovered colors that are 300% more concentrated, resilient and flexible than ever before.</p>
               </div>
               <div className="content-rows_img">
               <img src={image2} alt="splash-screen" width="592px" />
               </div>
               <div className="content-rows_img">
               <img src={image3} alt="kiwi" width="592px" />
               </div>
               <div className="content-rows_text">
                   <h2>Baking with friends.</h2>
                   <p>You know what feels awesome? Spoons up. Phones down. Sneaking a taste. But first, ideas, and we've got you covered. Stay ahead of your next project with our instagrams, and share the stuff you've created there, too. And if you just want to unplug and freestyle? Hell yes. (But catch you on the flip side, probably holding a fork.)</p>
               </div>
            </div>
        </div>
    )
}

export default About;