import React from 'react';
import footerLogo from '../images/FooterLogo.png';
import bgfooter from '../images/bgfooter.png';

const Footer = () => {
    
    const menuItem = ['Home', 'About', 'Service', 'Gallery', 'Team'];
    
    function handleToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (

        <div className='relative bottom-0 left-0 right-0'>
            <section id="" className="w-full h-[705.34px] relative">
                <div className="bg-footer lg:pt-60 pt-20 md:pt-40 absolute top-0 w-full h-[705.34px] z-10" style={{ backgroundImage: `url(${bgfooter})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                    <div className=" flex lg:justify-evenly justify-start lg:pl-0 pl-10 flex-wrap">
                        <div className=" flex flex-col text-[#D7DBFF] mr-20">
                            <div><img src={footerLogo} alt="" /></div>
                            <div className=" sm:pl-7 sm:pt-10 pl-0 sm:mt-0 mt-3">
                                <span className="text-lg">Beautice <span>is a Beauty Clinic Wordpress Theme.</span></span>
                                {/* <p className="text-[#D7DBFF]">is a Beauty Clinic WordPress Theme.</p> */}
                                <p className="text-[#D7DBFF] mt-3">Baker Steet 101, NY, United States.</p>
                                <div className="flex justify-start text-[#D7DBFF] mt-3">
                                    <p className='italic mr-10'>+521 569 8966.</p>
                                    <p className='italic'>mail@company.com.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start sm:mt-0 mt-10 sm:mr-0 mr-28">
                            <div className="text-white text-xl">Pages</div>
                            <ul className="ul-page text-[#D7DBFF]">
                                {menuItem?.map((item,index) => (
                                <li key={index} className='mr-4 lg:mt-2 mt-1 hover:border-b-2 cursor-pointer transition-all duration-200 ease-out'><i className="fa-solid fa-caret-right  "></i>{item}</li>
                                ))}
                                
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start sm:mt-0 mt-10">
                            <div className="text-white text-xl ">Informations</div>
                            <ul className="ul-page text-[#D7DBFF]">
                                <li><i className="fa-solid fa-caret-right mr-4 lg:mt-2  mt-1"></i>Terms & conditions</li>
                                <li><i className="fa-solid fa-caret-right mr-4 lg:mt-2  mt-1"></i>Privacy policy</li>
                                <li><i className="fa-solid fa-caret-right mr-4 lg:mt-2  mt-1"></i>Blog</li>
                                <li><i className="fa-solid fa-caret-right mr-4 lg:mt-2  mt-1"></i>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-end pr-10 mr-12">
                        <button className="text-white rounded-lg h-6 w-6 p-5 bg-colorPink flex justify-center items-center lg:mt-20 mt-10 " onClick={handleToTop}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>

                    <div className=" sm:w-70 w-full mx-auto lg:pt-8 pt-0 flex sm:flex-row flex-col justify-evenly items-center">
                        <div className="iconFooter flex w-1/3 justify-between">
                            <i className="fa-brands  fa-facebook text-white text-3xl"></i>
                            <i className="fa-brands  fa-twitter text-white text-3xl"></i>
                            <i className="fa-brands  fa-linkedin-in text-white text-3xl"></i>
                            <i className="fa-brands  fa-youtube text-white text-3xl"></i>
                            <i className="fa-brands  fa-instagram text-white text-3xl"></i>
                        </div>
                        <div className=" text-[#D7DBFF] font-poppins font-normal text-base text-right sm:mt-0 mt-3 ">
                            © AltDesain Studio 2021 - All right reserved.
                        </div>
                    </div>

                </div>
                <div className=" absolute bottom-0 w-full h-[125px] bg-[#0D165C] z-2"></div>
            </section>
        </div>

    );
}

export default Footer;
