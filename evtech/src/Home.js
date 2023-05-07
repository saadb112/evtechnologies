import React, { useEffect, useState } from 'react'
import Main from "./img/main.png"
import About from "./img/about.png"
import Poster from "./img/poster.png"
import Post from "./img/post.png"
import Card from "./img/card.png"
// import Posterdes from "./img/posterdes.png"
import Fb from "./img/fb.png"
import Ig from "./img/ig.png"
import Wa from "./img/wa.png"
import axios from 'axios'
import logo from './img/logo.png'
import emailjs from '@emailjs/browser';

const Home = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [msg, setmsg] = useState("")
    const send = (e) => {
        e.preventDefault()
        axios.post('https://evtechnologies.onrender.com/contact', {
            name,
            email,
            msg
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(name, email, msg)

    }
    // const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    // useEffect(() => {
    // setwindowWidth(window.innerWidth)
    // }, [window.innerWidth])
const [navbar, setnavbar] = useState(false)
const navbarFunc = ()=>{
    setnavbar(!navbar)
}
    return (
        <>

       <header className='header1 w-[164rem] m-auto flex justify-between pt-[2rem]'>
                <img src={logo} alt="" className='w-[13.4rem] h-[9.5rem]'/>
                <nav className='flex pt-[5.2rem] justify-center items-center'>
                    <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem]'>Home</a>
                    <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem]'>About</a>
                    <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem]'>Services</a>
                    <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem]'>Portfolio</a>
                    <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem]'>Contact</a>
                    <button class="button2">Contact</button>
                </nav>
            </header> 
            <header className='header2 w-[100%] m-auto flex justify-between pt-[2rem] flex-col pl-[2rem]' >
                <div className='flex justify-between items-center px-[2rem]'>
                    <img src={logo} alt="" className='w-[13.4rem] h-[9.5rem]' />
                    <div className="ham w-[30px] z-[100]" onClick={navbarFunc}>
                        <div className='w-[100%] border-[2px] border-[grey] rounded-[5rem] mb-[.8rem]'></div>
                        <div className='w-[100%] border-[2px] border-[grey] rounded-[5rem] mb-[.8rem]'></div>
                        <div className='w-[100%] border-[2px] border-[grey] rounded-[5rem] mb-[.8rem]'></div>
                    </div>
                </div>
                
                <div className={`navbarMb ${navbar ? "active" : ""}`}>

                    <img src={logo} alt="" className='w-[13.4rem] h-[9.5rem]' />
                    <nav className='flex pt-[5.2rem] justify-center  flex-col items-start'>
                        <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem] mb-[2rem]'>Home</a>
                        <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem] mb-[2rem]'>About</a>
                        <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem] mb-[2rem]'>Services</a>
                        <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem] mb-[2rem]'>Portfolio</a>
                        <a href="" className='text-[1.8rem] text-[#000000A6] mr-[6.7rem] mb-[2rem]'>Contact</a>
                        <button class="button2">Contact</button>
                    </nav>
                </div>
                

            </header>

            <section className="home mt-[21.4rem] h-[100vh]">
                <div className='flex w-[166.5rem] m-auto'>
                    <div className='w-[95.5rem] mr-[2.8rem]'>
                        <h1 className='text-left text-[7rem] leading-[8.1rem] font-[700] text-[#222222]'>Transform Your Brand with Stunning Designs: Social Media Posts, Banners, Logos and More</h1>
                        <p className='w-[75.3rem] my-[3.7rem] text-left text-[2.7rem] leading-[3.2rem] font-[500] text-[#222222]'>Great design has the power to transform businesses. Our team of talented designers specialize in creating stunning designs that help our clients stand out in a crowded market.</p>
                        <div className="flex">
                            <button class="button2">Services</button>
                            <button class="button3 ml-[2rem]">Portfolio</button>
                        </div>
                    </div>
                    <img src={Main} alt="" className='w-[63rem] h-[41.2rem]' />
                </div>
            </section>
            <section className="about">
                <h1 className=' text-[6rem] w-[138rem] m-auto leading-[7.2rem] font-[600] text-[#222222]'>We strive to help businesses differentiate themselves from the competition by delivering visually stunning and unique designs that capture the essence of their brand."</h1>
                <div className='flex mt-[10.8rem] justify-center items-center'>
                    <img src={About} alt="" className='w-[37.3rem] h-[45.6rem]' />
                    <div className='w-[68.1rem] text-left ml-[15.7rem]'>
                        <h2 className='text-[3rem] leading-[3.6rem] font-[600] text-[#222222]'>Creative Passion</h2>
                        <p className='text-[2rem] my-[1.4rem] leading-[2.6rem] font-[400] text-[#222222]'>At [Company Name], we're passionate about using creativity to transform businesses and capture the essence of each brand. Our team of expert designers focuses on delivering visually stunning, practical, and effective design solutions. We take pride in creating designs that stand out in today's crowded marketplace, whether it's a new logo, website, or marketing campaign. </p>
                        <h2 className='text-[3rem] leading-[3.6rem] font-[600] text-[#222222]'>Creative Passion</h2>
                        <p className='mt-[1.4rem] text-[2rem] leading-[2.6rem] font-[400] text-[#222222]'>At [Company Name], we're passionate about using creativity to transform businesses and capture the essence of each brand. Our team of expert designers focuses on delivering visually stunning, practical, and effective design solutions. We take pride in creating designs that stand out in today's crowded marketplace, whether it's a new logo, website, or marketing campaign. </p>
                    </div>
                </div>

                <marquee scrolldelay="10">

                    <h2 className="uppercase text-[8rem] leading-[8.6rem] font-[600] text-left">CREATIVE.Visual Communication.Aesthetics</h2>


                </marquee>
            </section>

            {/* Services  */}
            <section className="Services mt-[7rem]">
                <h1 className=' text-[6rem] w-[138rem] m-auto leading-[7.2rem] font-[600] text-[#222222]'>Helping businesses shine with stunning design solutions that captivate audiences and elevate brands.</h1>
                {/* Poster  */}
                <div className='flex mt-[13.3rem] flex-row-reverse justify-center items-center'>
                    <img src={Poster} alt="" className='w-[37.3rem] h-[52.1rem]' />
                    <div className='w-[68.1rem]  text-left mr-[15.7rem]'>
                        <h2 className='text-[3rem]  leading-[3.6rem] font-[600] text-[#222222]'>Poster / Banner Design</h2>
                        <p className='text-[2rem] my-[1.4rem] leading-[2.6rem] font-[400] text-[#222222]'>Our team of experienced designers understands the importance of creating customized poster and banner designs that reflect the unique identity of your brand. We work closely with our clients to ensure that every design element, from the color scheme to the font choice, aligns with their brand image and marketing goals.
                            <br />
                            <br />
                            At [Company Name], we specialize in designing attention-grabbing posters and banners that stand out in a crowded marketplace. Our designs are not only visually stunning but also effective in delivering your brand message to your target audience. Whether you need a poster for a trade show, a banner for an outdoor event, or any other type of promotional material, we have the expertise to deliver exceptional results that help your business succeed.</p>
                    </div>
                </div>
                {/* Social Media Post  */}
                <div className='flex mt-[13.3rem] justify-center items-center'>
                    <img src={Post} alt="" className='w-[37.3rem] h-[52.1rem]' />
                    <div className='w-[68.1rem]  text-left ml-[15.7rem]'>
                        <h2 className='text-[3rem]  leading-[3.6rem] font-[600] text-[#222222]'>Social Media Post Design</h2>
                        <p className='text-[2rem] my-[1.4rem] leading-[2.6rem] font-[400] text-[#222222]'>Our team at [Company Name] offers customized social media design solutions to help businesses stand out on their social media platforms. Our social media design service is tailored to fit the unique needs of each client, ensuring that their brand message is communicated effectively to their audience.
                            <br />
                            <br />
                            With the increasing importance of social media for businesses, it's essential to have eye-catching designs that capture the attention of your target audience. Our team specializes in creating social media designs that are not only visually appealing but also highly engaging, resulting in increased user engagement and brand awareness. Whether it's creating social media graphics, banners, or posts, our team has the expertise to deliver outstanding designs that will help businesses to achieve their social media goals.</p>
                    </div>
                </div>
                {/* Cards  */}
                <div className='flex mt-[13.3rem] flex-row-reverse justify-center items-center'>
                    <img src={Card} alt="" className='w-[37.3rem] h-[57rem]' />
                    <div className='w-[68.1rem]  text-left mr-[15.7rem]'>
                        <h2 className='text-[3rem]  leading-[3.6rem] font-[600] text-[#222222]'>Business Card / Visiting Card Design</h2>
                        <p className='text-[2rem] my-[1.4rem] leading-[2.6rem] font-[400] text-[#222222]'>At [Company Name], we specialize in creating unique and personalized business card designs that perfectly capture the essence of your brand. Our collaborative approach ensures that your business card not only looks great, but also effectively communicates your message to your target audience. We use high-quality materials and state-of-the-art printing techniques to create a visually appealing, durable, and long-lasting business card. Our commitment to exceptional service and delivering results that exceed your expectations is what sets us apart.
                            <br />
                            <br />
                            In addition to our customized business card design services, we also offer fast and affordable options for those who need a quick and cost-effective solution. Our pre-designed templates allow you to choose from a variety of styles and designs, with the ability to add your own text and logo for a personalized touch.</p>
                    </div>
                </div>
            </section>


            {/* Portfolio  */}
            <section className="portfolio">
                <div className='flex mt-[13.3rem] justify-center items-center'>
                    <h2 className='font-[700] text-[7rem] text-left leading-[8.2rem] w-[55.4rem]'>Designs That Speak Volumes</h2>
                    <div className='w-[68.1rem]  text-left ml-[15.7rem]'>
                        <p className='text-[2rem]  my-[1.4rem] mb-[3rem] leading-[2.6rem] font-[400] text-[#222222]'>we are passionate about delivering cutting-edge design solutions that help our clients stand out in today's competitive marketplace. Our team of highly skilled designers is dedicated to delivering innovative and professional designs that make an impact. From dynamic logos to engaging social media graphics, our designs are carefully crafted to meet the unique needs of each client. </p>
                        <button class="button2">Contact</button>

                    </div>
                </div>
                {/* image  */}
                {/* {
(window.innerWidth > 768) ? 
                <div className='flex justify-center mt-[13.7rem]'>
                    <div className='w-[28.4rem] h-[59.2rem] posterdes portdiv'>
                        <div className='w-[100%] h-[100%]'>
                            Poster Design
                        </div>
                    </div>

                    <div className='flex flex-col justify-between items-center mx-[2.6rem]'>
                        <div className='banner1 portdiv w-[56rem] h-[27.9rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Banner Design 1
                            </div>
                        </div>
                        <div className='banner2 portdiv w-[56rem] h-[27.9rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Banner Design 2
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        <div className='card1 portdiv w-[28.4rem] h-[16.2rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Visiting card
                                (Side A)
                            </div>
                        </div>
                        <div className='card2 portdiv w-[28.4rem] h-[16.2rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Visiting card
                                (Side B)
                            </div>
                        </div>
                        <div className='post portdiv w-[28.4rem] h-[21.3rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Social Media Post
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div> : */}
                <div className='flex justify-center flex-col w-[59rem] mt-[13.7rem] m-auto'>
                        <div className='banner1 portdiv w-[59rem] h-[27.9rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Banner Design 1
                            </div>
                        </div>

                    <div className='flex justify-between items-center w-[100%] my-[3rem]'>
                    <div className='w-[28.4rem] h-[59.2rem] posterdes portdiv'>
                        <div className='w-[100%] h-[100%]'>
                            Poster Design
                        </div>
                    </div>
                    <div className='flex h-[59.2rem] flex-col justify-between items-center'>
                        <div className='card1 portdiv w-[28.4rem] h-[16.2rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Visiting card
                                (Side A)
                            </div>
                        </div>
                        <div className='card2 portdiv w-[28.4rem] h-[16.2rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Visiting card
                                (Side B)
                            </div>
                        </div>
                        <div className='post portdiv w-[28.4rem] h-[21.3rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Social Media Post
                            </div>
                        </div>
                    </div>
                    </div>
                  
                   
                        <div className='banner2 portdiv w-[59rem] h-[27.9rem]'>
                            <div className='w-[100%] h-[100%]'>
                                Banner Design 2
                            </div>
                        </div>
                 
                </div>
                

</section>



            <section className="contact">
                <div className='flex mt-[13.3rem] justify-center items-center'>
                    <h2 className='font-[700] text-[7rem] text-left leading-[8.2rem] w-[73.6rem]'>Get in Touch with Our Expert Team for Exceptional Service </h2>
                    <div className='  text-left ml-[15.7rem]'>
                        <form action="">

                            <div className='flex'>
                                <div className='flex flex-col items-start text-[black] '>
                                    <label htmlFor="" className='text-[2rem] text-[black] mb-[1.5rem]'>Full Name</label>
                                    <input type="text" onChange={(e) => setname(e.target.value)} className='text-[1.8rem] pl-[2rem]' placeholder='Enter Your Full Name' />
                                </div>
                                <div className='ml-[2rem] flex flex-col items-start text-[black] '>
                                    <label htmlFor="" className='text-[2rem] text-[black] mb-[1.5rem]'>Email Address</label>
                                    <input type="text" onChange={(e) => setemail(e.target.value)} className='text-[1.8rem] pl-[2rem]' placeholder='Enter Your Email Address' />
                                </div>
                            </div>
                            <div className='flex items-start flex-col'>
                                <label htmlFor="" className='text-[2rem] text-[black] mt-[2.5rem]'>Message</label>
                                <textarea onChange={(e) => setmsg(e.target.value)} className='text-[1.8rem] mt-[1.5rem] pl-[1.5rem] pt-[1.5rem]' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                            </div>
                            <button onClick={(e) => { send(e) }} class="button2 mt-[2.5rem]">Portfolio</button>

                        </form>
                    </div>
                </div>
            </section>

            <footer className='mt-[32.6rem] w-[164rem] m-auto  flex justify-between items-center'>
                <img src={logo} className='w-[13.4rem] h-[9.5rem]' alt="" />
                <div>
                    <a href="" className='text-[2rem] mx-[2rem]'>Home</a>
                    <a href="" className='text-[2rem] mx-[2rem]'>About</a>
                    <a href="" className='text-[2rem] mx-[2rem]'>Services</a>
                    <a href="" className='text-[2rem] mx-[2rem]'>Portfolio</a>
                    <a href="" className='text-[2rem] mx-[2rem]'>Contact</a>
                </div>
                <div className='flex socialicons'>
                    <a href=""><img className='w-[6rem] h-[6rem] ' src={Fb} alt="" /></a>
                    <a href=""><img className='w-[6rem] h-[6rem] ' src={Ig} alt="" /></a>
                    <a href=""><img className='w-[6rem] h-[6rem] ' src={Wa} alt="" /></a>
                </div>
            </footer>
        </>


    )
}

export default Home