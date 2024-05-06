import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
function About() {
  return (
    <div>

   <Header/>

  
<section
   className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white"
   >
   <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
         <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
               <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                        />
                  </div>
                  <div className="py-3 sm:py-4">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                        />
                  </div>
               </div>
               <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                     <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                        />
                    
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
               <span className="block mb-4 text-lg font-semibold text-primary">
               Why Choose Us
               </span>
               <h2
                  className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]"
                  >
                  Make your customers happy by giving services.
               </h2>
               <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
               </p>
               <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
               </p>
               <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                  >
               Get Started
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="text-gray-700 body-font mt-10">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Why Us?
    </div>
    <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                </div>
            </div>

        </div>
    </div>
</section>

<Footer/>
    </div>
  )
}

export default About