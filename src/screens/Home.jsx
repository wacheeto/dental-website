import React from 'react';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';

export default function Home() {
  return (
    <div className='p-0 m-0'>
      {/* hero */}
      {/* can be fluid? */}
      <div className='container mx-auto h-[80vh]'>
        <div className='flex -1 p-2 h-full'>
          <div className='flex flex-col md:flex-row w-full '>
            <div className=' flex-1 flex flex-col justify-center'>
              <span className='font-sans text-2xl font-bold md:text-5xl'>Dental services made simple, so you can smile easily.</span>
              <p className="font-open text-gray-600 mt-4 text-xs md:text-sm">
                Experience high-quality, affordable dental care designed around your comfort. 
                From routine checkups to advanced treatments, we make every visit stress-free 
                and personalized for your best smile.
              </p>
              <button className='button bg-purple-700 me-auto h-auto px-10 py-3 rounded-xl flex justify-center my-7 hover:bg-purple-500 '>
                <span className='text-white font-medium font-open text-xs md:text-sm'>Book here</span>
              </button>
            </div>
            <div className=' p-5 flex-1 '>
              image here
            </div>
          </div>
        </div>
      </div>
      {/* end of hero */}
      {/* <div>
        lines of logo here ah
      </div> */}
      {/* services */}
      <div className=' container mx-auto my-2 p-2 '>
        <span className='font-sans text-2xl font-bold md:text-4xl justify-center flex text-center'>Caring for your smile, <br />one visit at a time.</span>
        <p className='font-open text-gray-600 mt-4 text-xs md:text-sm justify-center flex text-center'>Enjoy stress-free dental care with gentle treatments, <br /> modern equipment, and a team that makes you feel at home.</p>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -1 my-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-tooth text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Dental Cleaning</p>
                  <span className="text-white text-sm">Keep your teeth sparkling and healthy with regular professional cleanings that remove plaque, tartar, and stains for a brighter smile.</span>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-teeth text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Teeth Whitening</p>
                  <span className="text-white text-sm">Brighten your smile safely and effectively with our advanced whitening treatments designed to remove deep stains and discoloration.</span>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-align-left text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Orthodontics</p>
                  <span className="text-white text-sm">Straighten teeth and correct bites with customized braces or clear aligners, improving both your smile and overall dental function.</span>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-history text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Restorations</p>
                  <span className="text-white text-sm">Restore the function and appearance of damaged teeth using safe, durable materials that blend seamlessly with your natural teeth.</span>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-wrench text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Dental Implants</p>
                  <span className="text-white text-sm">Replace missing teeth with strong, natural-looking implants that restore your bite, confidence, and long-term oral health.</span>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl  p-4 min-h-[250px] flex flex-col items-center justify-center bg-purple-400 text-white shadow-md">
              <div className='flex flex-col items-center justify-between space-y-5'>
                <div className=''>
                  <i className="fa fa-solid fa-stethoscope text-3xl "></i>
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-1">
                  <p className='text-xl font-semibold'>Checkups</p>
                  <span className="text-white text-sm">Protect your teeth with regular exams, X-rays, and preventive treatments that detect problems early and maintain long-term oral health.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="container mx-auto h-[80vh] my-2 p-2">
        <div className='flex -1 p-2 h-full'>
          <div className='flex flex-col md:flex-row w-full '>
            <div className=' flex-1 flex flex-col justify-center '>
              <span className='font-sans text-2xl font-bold md:text-4xl justify-start flex'>Your Smile, Our Priority</span>
                <p className="font-open text-gray-600 text-xs md:text-sm justify-end flex my-5">
                  We combine modern technology, gentle care, and a patient-first approach to make every visit comfortable, effective, and personalized. From routine checkups to advanced treatments, our expert team ensures your smile stays healthy, confident, and stress-free.
                </p>
                <div className='space-y-2'>
                  <Accordion 
                    id='1' 
                    title={'How often should I visit the dentist?'} 
                    content={'We recommend a routine dental checkup every six months to maintain optimal oral health, detect potential issues early, and keep your smile bright.'}/>
                  <Accordion 
                    id='2'
                    title={'Are dental treatments painful?'} 
                    content={'Our team uses the latest technology and gentle techniques to minimize discomfort. Many procedures are virtually painless, and we provide options for sedation or numbing when needed.'}/>
                  <Accordion 
                    id='3' 
                    title={'Do you accept dental insurance?'} 
                    content={'Yes! We accept most major dental insurance plans and can help you maximize your benefits. For self-pay patients, we also offer flexible payment options.'}/>
                  <Accordion 
                    id='4' 
                    title={'What should I do in a dental emergency?'} 
                    content={'Contact us immediately. Our team provides emergency care for issues like severe tooth pain, broken teeth, or injury, and we’ll guide you on the best steps to protect your oral health.'}/>
                </div>
            </div>
            <div className=' p-5 flex-1 justify-center'>
              <img src="" alt="img" />
            </div>
          </div>
        </div>
      </div>
      {/* perks w location */}
      <div className="container mx-auto my-2 p-2 space-y-5 ">
        <span className="font-sans text-2xl font-bold md:text-3xl justify-center flex">
          Caring for Your Smile, Every Step of the Way
        </span>
        <span className="font-open text-gray-600 mt-2 text-xs md:text-sm justify-center flex text-center">
          Combining expert care with a warm, welcoming environment to make every <br />visit comfortable, stress-free, and tailored to your smile.
        </span>
        <div className='flex flex-col md:flex-row w-full space-x-2 space-y-5'>
          <div className=' flex-1 flex flex-col justify-center '>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.4568408148245!2d121.0961621900777!3d14.646203881952653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9c60642d16f%3A0xe1d442718cbbfe43!2sDe%20Vera.%20Velarde%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1760600606742!5m2!1sen!2sph"
            width="100%"
            height="350px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='rounded-xl'
          ></iframe>
          </div>
          <div className=' flex-1 flex flex-col space-y-3 px-5 justify-center'>
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <i className="fa fa-solid fa-location-pin text-md "></i>
                <span>J3WW+9P8, J. P. Rizal St, Marikina, 1800 Metro Manila</span>
              </div>
              <div className="flex space-x-2 items-center">
                <i className="fa fa-solid fa-phone text-md "></i>
                <span>0907 378 5231</span>
              </div>
              <div className="flex space-x-2 items-center">
                <i className="fa fa-solid fa-envelope text-md"></i>
                <span>dvdc.dental@gmail.com</span>
              </div>
              <div className="flex space-x-2 items-center">
                <i class="fa fa-brands fa-facebook-messenger"></i>
                <a href="https://www.facebook.com/DVdentalclinic/">De Vera-Velarde Dental Clinic</a>
              </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 '>
              <div className="w-full  rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-wind text-md"></i>
                <span className='font-open'>Air Conditioned</span>
              </div>
              <div className="w-full  rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-wifi text-md"></i>
                <span className='font-open'>Wifi Connection</span>
              </div>
              <div className="w-full rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-toilet text-md"></i>
                <span className='font-open'>Accessible Restroom</span>
              </div>
              <div className="w-full rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-couch text-md"></i>
                <span className='font-open'>Comfortable Sitting</span>
              </div>
              <div className="w-full rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-hand-sparkles text-md"></i>
                <span className='font-open'>Sanitized Equipment</span>
              </div>
              <div className="w-full rounded-md flex space-x-2 items-center py-4">
                <i className="fa fa-solid fa-clock text-md"></i>
                <span className='font-open'>Flexible Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faqs */}
      {/* reviews */}
    </div>
  );
}