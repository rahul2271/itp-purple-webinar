import React from 'react';

const WebinarSection = () => {
  return (
    <div className="md:mt-[50px] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-2xl font-regular text-[#4d4d4d] text-center">About the Webinar</h2>
        <div className='mx-auto w-max place-content-center'><hr style={{ width: '350px', borderColor: '#75269b', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-900">What will you learn?</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <div className="bg-[#75269b] text-white p-6 rounded-lg shadow-lg flex justify-center items-center h-full">
  <p className="text-lg font-bold text-center">
    Living with ITP, Handling Emergencies with Ease,  
    Eat Well to Support Healing, Handling Mental Stress,  
    & Why Ayurveda is Your Only Hope?
  </p>
</div>
            <div className="bg-[#4d4d4d] text-white p-6 rounded-lg shadow-lg flex justify-center items-center h-full">
              <p className="text-lg font-bold">How to Integrate Modern Medicines with Ayurveda & Panchakarma Treatment Methods</p>
            </div>
            <div className="bg-[#75269b]  text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-left font-light"><span className='font-bold text-2xl' >You will Stop Worrying About</span><br/>

              • Misdiagnosis<br/>
              • Long-Term Side Effects<br/>
              • Treatment Resistance<br/>
              • Serious Complications<br/>
              • Making Mistakes<br/>
              • ITP Relapse<br/>
              • Loss of Quality of Life</p>
            </div>
            <div className="bg-[#4d4d4d] text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-left font-light"><span className='font-bold text-2xl'>Get to Know!!!</span><br/>

              • Why Ayurveda is the Best Treatment Option?<br/>
              • Herbal Home Remedies to Increase Platelets<br/>
              • Preventive Methods of ITP Reversal<br/>
              • How Panchakarma Can Help You Regain Your Health? </p>
            </div>
            <div className="bg-[#75269b] text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-left font-light"><span className='font-bold text-2xl' >Know Your Herbs of Choice</span><br/>
              • Ashwagandha<br/>
              • Amla<br/>
              • Moringa<br/>
              • Carica Papaya leaves<br/>
              • Giloy<br/>
              • Durva Grass<br/>
              </p>
            </div>
            <div className="bg-[#4d4d4d] text-white p-6 rounded-lg shadow-lg flex justify-center items-center h-full">
              <p className="text-lg text-left font-bold text-center">Tips to make your Home & Other surroundings safe, lessens chances of injury.</p>
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
