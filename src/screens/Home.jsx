import React from 'react';
import Navbar from '../components/Navbar';

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
    </div>

  );
}