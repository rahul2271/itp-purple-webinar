// components/VideoSection.js
import next from "next";

const VideoSection = () => {
    return (
      <section className="py-10 ">
      <h2 className="text-2xl md:text-5xl font-regular text-center text-[#4d4d4d] mb-8 md:mt-[50px]">
        ITP Videos
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="w-full h-64">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ABAJ69MQpuU?si=KFwaSqwioY5jCU1y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full h-64">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CXID3SD7FtQ?si=rrAaVTMbE_a5AaUG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full h-64">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pAkTnSAB8eM?si=d8NQaPFdkJFq55Ty"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoSection;
  