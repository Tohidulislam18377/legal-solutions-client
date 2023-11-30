import { Link } from "react-router-dom";
import './NavigationBar.css'
import img1 from '../../assets/images/logo2.png'


const NavigationBar = () => {
    return (
        <div>
            <div className="navbar mb-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                        <li style={{ fontSize:'16px', fontWeight:'400', padding:'0px 8px', borderRadius:'5px'}}><Link>Home</Link></li>
                        <li style={{ fontSize:'16px', fontWeight:'400', borderRadius:'5px',padding:'0px 8px'}}><Link>Contact Us</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400', borderRadius:'5px',padding:'0px 8px'}}><Link>Blog</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400',borderRadius:'5px',padding:'0px 8px'}}><Link>Services</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400',borderRadius:'5px',padding:'0px 8px'}}><Link>Cases</Link></li>
                   
                        
                        </ul>
                    </div>
                  <img style={{marginLeft:'20px'}} src={img1} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="abc">
                        <li style={{ fontSize:'16px', fontWeight:'400', padding:'0px 8px', borderRadius:'5px'}}><Link to='/'>Home</Link></li>
                        <li style={{ fontSize:'16px', fontWeight:'400', borderRadius:'5px',padding:'0px 8px'}}><Link>Contact Us</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400', borderRadius:'5px',padding:'0px 8px'}}><Link>Blog</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400',borderRadius:'5px',padding:'0px 8px'}}><Link>Services</Link></li>
                        <li style={{fontSize:'16px', fontWeight:'400',borderRadius:'5px',padding:'0px 8px'}}><Link>Cases</Link></li>
                        
                    </ul>
                </div>
                <div style={{ marginRight: '20px' }} className="navbar-end">
                    <button style={{ backgroundColor: '#B68C5A', padding:'10px', borderRadius:'5px' }}>Free Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;