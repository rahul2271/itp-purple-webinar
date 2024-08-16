import React from 'react';

const WebinarSection = () => {
  return (
    <div className="md:mt-[50px] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-2xl font-regular text-[#47126B] text-center">About the Webinar</h2>
        <div className='mx-auto w-max place-content-center'><hr style={{ width: '350px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-900">What will you learn?</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div className="bg-[#47126B]  text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">
                Causes of Infertility in Females <br />
                Causes of Infertility in Males <br />
                What is Biological incompatibility?
              </p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">What are the risk factors of IVF?<br/>Why Ayurveda & Panchakarma for Infertility?<br/>How it is better than IVF?</p>
            </div>
            <div className="bg-[#47126B]  text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Diet & Lifestyle changes to overcome M/F Infertility</p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Benefits of Natural Pregnancy </p>
            </div>
            <div className="bg-[#47126B] text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Lab investication to rule out <br/>M/F Infertility <br/>Or<br/>Find the Real Cause</p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Panchakarma Therapies:-<br/>• Uttar Basti [Male/Female]<br/>• Virechana Karma<br/>• Basti Karma</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 text-center"> */}
          {/* <h3 className="md:text-7xl text-2xl animate-ping font-extrabold text-[#47126B]">Get a E-Book</h3> */}
          {/* <p className="animate-bounce text-orange-600 text-6xl font-extrabold mt-2">FREE</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default WebinarSection;
