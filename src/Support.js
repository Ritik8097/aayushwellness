import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Support() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2c0d5343-1be2-4839-a5f8-7dfe15886a76");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
        <Header/>

        <div className="w-full flex flex-col md:flex-row md:mt-[105px] mt-[85px] mb-[3rem]">
            <div className=' w-full md:w-1/2 '>
                <img src='https://www.forecastadvtg.com/wp-content/uploads/2020/08/contact-img.jpg?id=5280'/>
                </div>
                <div className='  w-full md:w-1/2 p-6'>
                <h2 className="text-2xl font-semibold text-gray-700">Contact Here</h2>

<form onSubmit={onSubmit} className="flex flex-col items-center justify-center h-full pt-10 md:pl-10 md:pr-10 bg-white">
    <div className="w-full mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
    </div>
    <div className="w-full mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
    </div>
    <div className="w-full mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
            name="message"
            id="message"
            required
            rows="4"
            className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        ></textarea>
    </div>
    <button
        type="submit"
      style={{background:'#d1a272'}}  className=" text-white py-2 px-6 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
    >
        Contact Us
    </button>
</form>
{result && (
    <div className="text-center text-gray-600">
        <span>{result}</span>
    </div>
)}
                </div>
        </div>






        <div className="w-full flex flex-col md:flex-row   mb-[3rem]  ">
            <div className=' w-full md:w-1/2 pl-20 p-10'>
            <div style={{boxSizing: 'border-box'}}>
    <div style={{boxSizing: 'border-box', paddingLeft: '26px'}}>
        <div style={{boxSizing: 'border-box', position: 'relative', paddingBottom: '12px'}}>
            <h2 style={{boxSizing: 'border-box', clear: 'both', fontSize: '32px', lineHeight: '40px', fontWeight: 700, fontFamily: 'Montserrat', color: 'rgb(40, 64, 109)', margin: '0px 0px 12px', marginBottom: '12px', textTransform: 'uppercase', marginTop: '0px'}}>Contact Info</h2>
        </div>
        <div style={{boxSizing: 'border-box'}}>
            <p style={{boxSizing: 'border-box', margin: '0px 0px 26px', marginTop: '0px', marginBottom: '26px'}}>If you’d like to know more about our agency or you have an idea that you’d like to discuss, please get in touch with us. We’re all ears!</p>
        </div>
    </div>
    <div style={{boxSizing: 'border-box', marginLeft: '0px', marginRight: '0px'}}>
        <div style={{width: '100%', float: 'left', boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', position: 'relative', minHeight: '1px'}}>
            <div style={{boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', width: '100%'}}>
                <div style={{boxSizing: 'border-box'}}>
                    <div style={{boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box', textAlign: 'left'}}>
                            <div style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', marginTop: '0px', marginBottom: '0px', display: 'flex', paddingBottom: '20px', position: 'relative', paddingTop: '20px', paddingLeft: '26px', overflow: 'hidden'}}>
                               
                                <div style={{boxSizing: 'border-box', float: 'left', width: '80%', paddingLeft: '15px'}}>
                                    <h3 style={{boxSizing: 'border-box', clear: 'both', marginTop: '0px', marginBottom: '1px', fontWeight: 500, fontSize: '22px', lineHeight: '24px', fontFamily: 'Montserrat', color: 'rgb(35, 32, 35)', margin: '0px 0px 1px'}}>Call Us</h3> <a href="tel:++91 77188 14066" style={{boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(102, 102, 102)', transition: '0.3s', textDecoration: 'none solid rgb(102, 102, 102)', outline: 'rgb(102, 102, 102) none 0px', pointerEvents: 'none'}}>+91 77188 14066</a>
                                </div>
                                <div style={{boxSizing: 'border-box', display: 'none'}}><i style={{boxSizing: 'border-box', fontStyle: 'italic', display: 'inline-block', width: '16px', height: '16px', lineHeight: '16px', verticalAlign: 'text-top', marginLeft: '5px'}}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{boxSizing: 'border-box', marginLeft: '0px', marginRight: '0px'}}>
        <div style={{width: '100%', float: 'left', boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', position: 'relative', minHeight: '1px'}}>
            <div style={{boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', width: '100%'}}>
                <div style={{boxSizing: 'border-box'}}>
                    <div style={{boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box', textAlign: 'left'}}>
                            <div style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', marginTop: '0px', marginBottom: '0px', display: 'flex', paddingBottom: '20px', position: 'relative', paddingTop: '20px', paddingLeft: '26px', overflow: 'hidden'}}>
                               
                                <div style={{boxSizing: 'border-box', float: 'left', width: '80%', paddingLeft: '15px'}}>
                                    <h3 style={{boxSizing: 'border-box', clear: 'both', marginTop: '0px', marginBottom: '1px', fontWeight: 500, fontSize: '22px', lineHeight: '24px', fontFamily: 'Montserrat', color: 'rgb(35, 32, 35)', margin: '0px 0px 1px'}}>Mail Us</h3> <a href="mailto:hello@forecastadvtg.com" style={{boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(102, 102, 102)', transition: '0.3s', textDecoration: 'none solid rgb(102, 102, 102)', outline: 'rgb(102, 102, 102) none 0px'}}>hello@forecastadvtg.com</a>
                                </div>
                                <div style={{boxSizing: 'border-box', display: 'none'}}><i style={{boxSizing: 'border-box', fontStyle: 'italic', display: 'inline-block', width: '16px', height: '16px', lineHeight: '16px', verticalAlign: 'text-top', marginLeft: '5px'}}></i></div>
                            </div>
                        </div>
                    </div>
                    <div style={{boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box', textAlign: 'left'}}>
                            <div style={{boxSizing: 'border-box', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', marginTop: '0px', marginBottom: '0px', display: 'flex', paddingBottom: '20px', position: 'relative', paddingTop: '20px', paddingLeft: '26px', overflow: 'hidden'}}>
                               
                                <div style={{boxSizing: 'border-box', float: 'left', width: '80%', paddingLeft: '15px'}}>
                                    <h3 style={{boxSizing: 'border-box', clear: 'both', marginTop: '0px', marginBottom: '1px', fontWeight: 500, fontSize: '22px', lineHeight: '24px', fontFamily: 'Montserrat', color: 'rgb(35, 32, 35)', margin: '0px 0px 1px'}}>Address</h3>
                                    604, Universal Majestic, P.L. Lokhande Marg, Behind R.B.K. International School, Chembur, Mumbai – 400043.
                                </div>
                                <div style={{boxSizing: 'border-box', display: 'none'}}><i style={{boxSizing: 'border-box', fontStyle: 'italic', display: 'inline-block', width: '16px', height: '16px', lineHeight: '16px', verticalAlign: 'text-top', marginLeft: '5px'}}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                </div>
                <div className='  w-full md:w-1/2 pl-6 pr-6'>
                <iframe className='w-full'  src="https://www.google.com/maps/d/embed?mid=1ElpRkEoQ8sRvtRH7YCvyB-IJP0RBh7E&ehbc=2E312F"   height="480"></iframe>
               </div>
        </div>
        
       
        <Footer/>
        </>
    );
}

export default Support;
