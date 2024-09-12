
// import next from "next";
// import Link from "next/link";

// export default function Blog(){
//     const handleClick = () => {
//         window.open('https://www.example.com', '_blank'); // '_blank' opens the URL in a new tab
//       };
//      const handleClick1 = ()=> {
//         window.open("https://www.yuktiherbs.com/itp-in-children-symptoms-diagnosis-and-care-strategies/", "_blank")
//      } 
//      const handleClick2 = ()=> {
//         window.open("https://www.yuktiherbs.com/emotional-well-being-and-itp-coping-with-a-chronic-condition/", "_blank")
//      }
//     return(
//         <div>
//             <h2 className="text-2xl md:text-5xl font-regular text-center text-[#47126B] mb-8 md:mt-[50px]"> Blogs </h2>
//             <div className='md:mt-[5px] md:pb-[25px] mx-auto w-max place-content-center'><hr style={{ width: '250px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
//         <div className="flex mx-auto m-max place-content-center gap-5 ">
        
//         <div className="w-[400px] rounded-md border shadow-md ">
            
//       <img
//         src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-4.28.16-PM-1.jpeg"
//         alt="Laptop"
//         className="h-[220px] w-full rounded-md object-cover"
//       />
//       <div className="p-4">
//         <h1 className="text-lg text-[#F14A04] font-semibold">The Role of Ayurveda in Managing ITP: Natural Remedies and Practices
//         </h1>
//         <p className="mt-3 text-sm text-gray-600">
//         Immune Thrombocytopenic Purpura (ITP) is a condition where the immune system mistakenly attacks and destroys platelets, crucial components of blood clotting. ITP can be treated through conventional medicines but Ayurveda which is an Indian traditional medical science is also an effective system of medicine beside the conventional medicines. Based on the Ayurvedic view of ITP, this article aims at offering some natural cure and preventive measures that can be useful in treating the disease. 
//         </p>
//         <button
//           onClick={handleClick}
//           formTarget="_blank"
//           type="button"
//           className="mt-4 rounded-sm bg-[#F14A04] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//         >
//           Read
//         </button>
//       </div>

      
//     </div>

// <div className="w-[400px] rounded-md border shadow-md">
            
// <img
//   src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-1.46.50-PM.jpeg"
//   alt="Laptop"
//   className="h-[220px] w-full rounded-md object-cover"
// />
// <div className="p-4">
//   <h1 className="text-lg text-[#F14A04] font-semibold">ITP in Children: Symptoms, Diagnosis, and Care Strategies
//   </h1>
//   <p className="mt-3 text-sm text-gray-600">
//   Immune Thrombocytopenic Purpura (ITP), can be defined as that disease, which results from a low number of platelets in the blood, and which hinders the clotting process. When it occurs in children, it often presents unique challenges for parents and caregivers. This article provides an in-depth look at ITP in children, including symptoms, diagnosis, treatment options, and strategies for managing the condition.
//   </p>
//   <button
//   onClick={handleClick1}
//     type="button"
//     className="mt-4 rounded-sm bg-[#F14A04] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//   >
//     Read
//   </button>
// </div>


// </div>

// <div className="w-[400px] rounded-md border shadow-md">
            
// <img
//   src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-07-at-4.27.03-PM-1.jpeg"
//   alt="Laptop"
//   className="h-[220px] w-full rounded-md object-cover"
// />
// <div className="p-4">
//   <h1 className="text-lg text-[#F14A04] font-semibold">Emotional Well-being and ITP: Coping with a Chronic Condition
//   </h1>
//   <p className="mt-3 text-sm text-gray-600">
//   Chronic ITP is common, and it is emotionally draining to live with the condition as it creates a significant impact in one’s life. ITP is a pathological condition that is associated with a low count of platelets in the body; it presents with signs and symptoms such as bruising and bleeding. As much as managing the physical aspect is essential, so is the controlling impacts felt emotionally and psychologically. This article discusses the emotional aspect of ITP, ways to manage it effectively, the importance of support groups, practices, and signs that indicate that professional help is necessary.


//   </p>
//   <button
//   onClick={handleClick2}
//     type="button"
//     className="mt-4 rounded-sm bg-[#F14A04] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//   >
//     Read
//   </button>
// </div>


// </div>
// </div>
// </div>
//     )
// }


import Link from "next/link";

export default function Blog() {
  const handleClick = () => {
    window.open("https://www.example.com", "_blank"); // '_blank' opens the URL in a new tab
  };
  const handleClick1 = () => {
    window.open(
      "https://www.yuktiherbs.com/itp-in-children-symptoms-diagnosis-and-care-strategies/",
      "_blank"
    );
  };
  const handleClick2 = () => {
    window.open(
      "https://www.yuktiherbs.com/emotional-well-being-and-itp-coping-with-a-chronic-condition/",
      "_blank"
    );
  };

  return (
    <div className="px-4">
      <h2 className="text-2xl md:text-5xl font-regular text-center text-[#4d4d4d] mb-8 md:mt-[50px]">
        Blogs
      </h2>
      <div className="md:mt-[5px] md:pb-[25px] mx-auto w-max place-content-center">
        <hr
          style={{
            width: "250px",
            borderColor: "#75269b",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap mx-auto md:m-max place-content-center gap-5">
        {/* First Blog Card */}
        <div className="w-full md:w-[400px] rounded-md border shadow-md">
          <img
            src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-4.28.16-PM-1.jpeg"
            alt="Laptop"
            className="h-[220px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg text-[#c65ff6] font-semibold">
              The Role of Ayurveda in Managing ITP: Natural Remedies and Practices
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Immune Thrombocytopenic Purpura (ITP) is a condition where the immune system
              mistakenly attacks and destroys platelets, crucial components of blood clotting...
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="mt-4 w-full rounded-sm bg-[#c65ff6] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>

        {/* Second Blog Card */}
        <div className="w-full md:w-[400px] rounded-md border shadow-md">
          <img
            src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-05-at-1.46.50-PM.jpeg"
            alt="Children"
            className="h-[220px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg text-[#c65ff6] font-semibold">
              ITP in Children: Symptoms, Diagnosis, and Care Strategies
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Immune Thrombocytopenic Purpura (ITP), can be defined as that disease, which results
              from a low number of platelets in the blood, and which hinders the clotting process...
            </p>
            <button
              onClick={handleClick1}
              type="button"
              className="mt-4 w-full rounded-sm bg-[#c65ff6] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>

        {/* Third Blog Card */}
        <div className="w-full md:w-[400px] rounded-md border shadow-md">
          <img
            src="https://www.yuktiherbs.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-07-at-4.27.03-PM-1.jpeg"
            alt="Emotional Well-being"
            className="h-[220px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg text-[#c65ff6] font-semibold">
              Emotional Well-being and ITP: Coping with a Chronic Condition
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Chronic ITP is common, and it is emotionally draining to live with the condition as
              it creates a significant impact in one’s life. ITP is a pathological condition that is associated...
            </p>
            <button
              onClick={handleClick2}
              type="button"
              className="mt-4 w-full rounded-sm bg-[#c65ff6] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
