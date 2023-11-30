import NavigationBar from "../Navigation/NavigationBar";
import './Home.css'
import img1 from '../../assets/images/business.png'
import img2 from '../../assets/images/criminal.png'
import img3 from '../../assets/images/child.png'
import img4 from '../../assets/images/education.png'
import img5 from '../../assets/images/divorce.png'
import img6 from '../../assets/images/tax.png'
import img7 from '../../assets/images/Frame.png'
import img8 from '../../assets/images/banner.png'
import img9 from '../../assets/images/faq.png'
import img10 from '../../assets/images/address.png'
import img11 from '../../assets/images/call.png'
import img12 from '../../assets/images/email.png'
import img13 from '../../assets/images/time.png'

import { Carousel, Typography } from "@material-tailwind/react";





const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="solution-banner me-5 ms-5 rounded mb-5">
                <p style={{ fontWeight: '800', fontSize: '52px', lineHeight: '55px' }} className="text-white text-center pt-24 mb-4">We Provide Effective <br />Legal Solutions</p>
                <p style={{ fontSize: '16px', fontWeight: '400' }} className="text-white text-center">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour.</p>
                <div className="ms-80 pt-4 ">
                    <input className="input-search ps-4 pr-3 h-9 w-1/3 rounded  " type="search" name="" placeholder="Search" id="" />
                    <button className="h-9 rounded" style={{ backgroundColor: "#B68C5A", marginLeft: '15px', width: '105px', border: '0px', color: "white" }}>Search</button>
                </div>
            </div>
            {/* card category */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <p style={{ fontSize: '40px', fontWeight: '800' }}>The Legal Practice Area</p>
                <p style={{ fontWeight: '400', fontSize: '16px' }}>There are many variations of passages of Lorem Ipsum bravailable, but the majority have <br /> suffered alteration in some form, by injected humour.</p>
            </div>

            <div className="card-line">
                <div>
                    <img style={{ paddingLeft: '115px', paddingBottom: '10px' }} src={img1} alt="" />
                    <p style={{ textAlign: 'center' }}>Business Law</p>
                    <p style={{ textAlign: 'center' }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px' }} src={img7} alt="" />
                </div>

                <div style={{ backgroundColor: '#E7E7E7', borderRadius: '5px' }}>
                    <img style={{ paddingLeft: '120px', paddingBottom: '10px', paddingTop: '10px' }} src={img2} alt="" />
                    <p style={{ textAlign: 'center' }}>Criminal Law</p>
                    <p style={{ textAlign: 'center', }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px', paddingBottom: '' }} src={img7} alt="" />

                </div>

                <div>
                    <img style={{ paddingLeft: '120px', paddingBottom: '10px' }} src={img3} alt="" />
                    <p style={{ textAlign: 'center' }}>Child Support</p>
                    <p style={{ textAlign: 'center', }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px' }} src={img7} alt="" />
                </div>
                <div>
                    <img style={{ paddingLeft: '120px', paddingBottom: '10px' }} src={img4} alt="" />
                    <p style={{ textAlign: 'center' }}>Education Law</p>
                    <p style={{ textAlign: 'center', }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px' }} src={img7} alt="" />
                </div>
                <div>
                    <img style={{ paddingLeft: '112px', paddingBottom: '10px' }} src={img5} alt="" />
                    <p style={{ textAlign: 'center' }}>Divorce Law</p>
                    <p style={{ textAlign: 'center', }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px' }} src={img7} alt="" />
                </div>
                <div>
                    <img style={{ paddingLeft: '120px', paddingBottom: '10px' }} src={img6} alt="" />
                    <p style={{ textAlign: 'center' }}>Tax Law</p>
                    <p style={{ textAlign: 'center', }}>There are many variations of <br />passages of Lorem Ipsum <br /> available, but the majority have <br /> suffered alteration in some <br /> form, by injected humour.</p>
                    <img style={{ paddingLeft: '122px', paddingTop: '10px' }} src={img7} alt="" />
                </div>
            </div>
            {/* client section */}
            <div className="text-center mb-4">
                <p style={{ fontWeight: '800', fontSize: '40px' }}>What Our Client Say</p>
                <p style={{ fontWeight: '400', fontSize: '16px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humour.</p>
            </div>
            <div className="ms-4 me-4 mb-5">
                <Carousel className="rounded-xl">
                    <div className="relative h-full w-full">
                        <img
                            src={img8}
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img src="" alt="" />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <p style={{ fontSize: '24px', fontWeight: '800', color: '#FFF' }}>Awlad Hossain</p>
                                <p style={{ fontSize: '16px', fontWeight: '400', color: '#FFF' }}>UIX Designer</p>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-100"
                                >
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img src={img8} alt="" />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <p style={{ fontSize: '24px', fontWeight: '800', color: '#FFF' }}>Awlad Hossain</p>
                                <p style={{ fontSize: '16px', fontWeight: '400', color: '#FFF' }}>UIX Designer</p>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-100"
                                >
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                </Typography>

                            </div>
                        </div>
                    </div>
                    <div className="relative h-full w-full">
                        <img src={img8} alt="" />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <p style={{ fontSize: '24px', fontWeight: '800', color: '#FFF' }}>Awlad Hossain</p>
                                <p style={{ fontSize: '16px', fontWeight: '400', color: '#FFF' }}>UIX Designer</p>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-100"
                                >
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Frequently Asked Any Questions */}
            <div style={{ marginBottom: '20px' }}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img style={{ height: '570px', width: '574px' }} className="me-5 ps-4" src={img9} />
                        <div className="ms-5">
                            <div className="collapse collapse-plus bg-base-200 mb-3">
                                <input type="radio" name="my-accordion-3" checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    <p style={{ color: '' }}> 1. Click to open this one and close others</p>
                                </div>
                                <div className="collapse-content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe repellendus fugiat itaque eligendi illo suscipit neque aperiam nemo iure, enim sunt ea tenetur? Debitis temporibus ipsam id in labore dignissimos, error nisi est libero, optio, corrupti at neque necessitatibus deserunt possimus doloremque. A provident nemo placeat voluptatum hic at culpa.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200 mb-3">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    2. Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque consectetur hic inventore neque aliquam magni sequi veniam animi nesciunt provident! Quaerat sunt vero minima voluptates magnam, alias non, eos doloribus commodi saepe odit, consectetur doloremque velit! Ea at quasi voluptatem iste aperiam quos alias! Provident dignissimos rerum officia magni harum.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200 mb-3">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    3. Click to open this one and close others
                                </div>
                                <div className="collapse-content">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At excepturi accusantium, soluta nihil numquam pariatur aliquam velit et quae accusamus. Laboriosam rerum deserunt neque quae quam ullam sapiente, exercitationem aspernatur mollitia in hic nemo impedit. Commodi similique, error debitis aspernatur accusantium quidem in incidunt minima dolorem aperiam, quisquam, repellendus itaque?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact With Us */}

            <div className="text-center mb-5">
                <p style={{ fontSize: '40px', fontWeightL: '800' }}>Contact With Us</p>
                <p style={{ fontSize: '16px', fontWeightL: '400' }}>There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour.</p>
            </div>
            {/* main */}
            <div style={{display:'flex', columnGap:'30px', marginBottom:'30px'}}>

                <div className="contact">
                    <div style={{height:'285px', width:'285px', backgroundColor:'var(--Dark-07, #F3F3F3)', borderRight:'1px solid #CFCFCF', borderBottom:'1px solid #CFCFCF',textAlign:'center', borderRadius:'5px 0px 0px 0px'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'25%'}}>
                        <img style={{width:'40px', height:'40px'}} src={img10} alt="" />
                        <p style={{fontSize:'24px', fontWeight:'800'}}>Address</p>
                        <p style={{fontSize:'16px', fontWeight:'400'}}>A108 Adam Street, <br />
                            New York, NY 535022</p>
                        </div>
                    </div>
                    <div style={{height:'285px', width:'285px', backgroundColor:'var(--Dark-07, #F3F3F3)',borderBottom:'1px solid #CFCFCF', borderRadius:'0px 5px 0px 0px'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'25%'}}>
                        <img style={{width:'40px', height:'40px'}} src={img11} alt="" />
                        <p style={{fontSize:'24px', fontWeight:'800'}}>Call Us</p>
                        <p style={{fontSize:'16px', fontWeight:'400'}}>+88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                        </div>
                    </div>
                    <div style={{height:'285px', width:'285px', backgroundColor:'var(--Dark-07, #F3F3F3)',borderRight:'1px solid #CFCFCF',borderRadius:'0px 0px 0px 5px'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'25%'}}>
                        <img style={{width:'40px', height:'40px'}}  src={img12} alt="" />
                        <p>Email Us</p>
                        <p>info@gmail.com <br />
                            info@gmail.com</p>
                        </div>
                    </div>
                    <div style={{height:'285px', width:'285px', backgroundColor:'var(--Dark-07, #F3F3F3)',borderRadius:'0px 0px 5px 0px'}}>
                       <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'25%'}}>
                       <img src={img13} alt="" />
                        <p style={{fontSize:'24px', fontWeight:'800'}}>Working Hours</p>
                        <p style={{fontSize:'16px', fontWeight:'400'}}>Mon-Fri: 9AM to 5PM <br />
                            Sunday: 9AM to 1 PM</p>
                       </div>
                    </div>
                </div>

                    <div style={{marginRight:'20px'}}>
                      <input className="message" style={{display:'block', width:'350px', height:'72px', backgroundColor:'var(--Dark-07, #F3F3F3)', borderRadius:'8px', paddingLeft:'20px', marginBottom:'20px', outlineStyle:'none'}} type="text" name="" placeholder="Your Name" id="" />
                      <input className="message" style={{display:'block',width:'350px', height:'72px', backgroundColor:'var(--Dark-07, #F3F3F3)', borderRadius:'8px', paddingLeft:'20px', marginBottom:'20px', outlineStyle:'none'}} type="email" name="" placeholder="You Email" id="" />
                      <input className="message" style={{display:'block',width:'350px', height:'72px', backgroundColor:'var(--Dark-07, #F3F3F3)', borderRadius:'8px', paddingLeft:'20px', marginBottom:'20px', outlineStyle:'none'}} type="text" name="" placeholder="Subject" id="" />
                      <input className="message" style={{display:'block',width:'350px', height:'200px', backgroundColor:'var(--Dark-07, #F3F3F3)', borderRadius:'8px', paddingLeft:'20px', marginBottom:'20px', outlineStyle:'none',}} type="text" name="" placeholder="Message" id="" />
                        <button style={{backgroundColor:'#B68C5A', width:"350px", height:'72px', borderRadius:'8px'}}>Send Message</button>
                    </div>

            </div>

        </div>
    );
};

export default Home;