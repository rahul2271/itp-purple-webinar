// components/Testimonials.js
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'Archna Devi', review: 'I was diagnosed with ITP two years ago, and my platelet count kept dropping despite trying different treatments. When I turned to Yukti Herbs, I was skeptical at first. But within three months of following their Ayurvedic treatment plan, my platelet levels stabilized, and I began to feel more energized. Yukti Herbs truly gave me hope!' },
    { name: 'Sunita Devi', review: 'ITP made me feel like I was constantly living in fear of bleeding or bruising. After discovering Yukti Herbs Ayurveda-based treatment, I noticed improvements within a few weeks. The holistic approach to healing my body and mind has been life-changing. My platelet count is much higher, and my overall health has improved dramatically.' },
    { name: 'Swati', review: 'I struggled with ITP for over a year, and conventional medicines just weren’t working for me. I gave Yukti Herbs a try, and its been the best decision I’ve made. Not only did my platelets increase, but I also feel healthier and more balanced overall. Ayurveda has brought me peace and stability in my life.' },
    { name: 'Isha', review: 'Yukti Herbs Ayurveda treatment was a turning point in my ITP journey. I had been through multiple rounds of medications with no success. Within a couple of months on Yukti’s Ayurvedic regimen, my platelets improved, and my energy levels shot up. I can now lead a normal life again, and I am forever grateful!' },
    { name: 'Supriya Sharma', review: 'Living with ITP had taken a toll on my mental and physical health. The constant fatigue and fear were overwhelming. Yukti Herbs’ personalized Ayurvedic treatment gave me a new lease on life. My platelets have stabilized, and I feel mentally stronger and more positive. Ayurveda has truly been my savior.' },

    { name: 'Jaya mishra', review: 'I was desperate when I found Yukti Herbs. My platelet count had dropped dangerously low despite trying various treatments. With their Ayurvedic medicines and guidance, I saw a steady increase in my platelets, and I haven’t felt this healthy in years. Thank you, Yukti Herbs, for giving me my life back!' },
    { name: 'Aditi Gaur', review: 'As someone who was dealing with constant bruising and low platelet counts, I was worried ITP would control my life forever. Yukti Herbs’ Ayurvedic treatment has been a complete game-changer. My platelet count is stable, and I’m living without fear for the first time in a long while.' },
    { name: 'Neha', review: 'After months of frustration with my ITP treatments, a friend recommended Yukti Herbs. The Ayurvedic approach has been nothing short of a miracle. My platelets are finally under control, and I feel stronger every day. The natural, holistic approach worked for me where modern medicines failed.' },
    { name: 'Priya Mahajan', review: 'ITP made me feel helpless, and I didn’t think I’d ever live a normal life again. Then I discovered Yukti Herbs. Their Ayurvedic treatments improved my platelet count and overall well-being. I feel healthier, calmer, and more optimistic than ever. I’m so glad I trusted Ayurveda and Yukti Herbs.' },
    // Add more testimonials as needed
  ];

  return (
    <div id='testimonials' className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-5xl font-regular text-center text-[#4d4d4d] mb-8">Customer Testimonials</h2>
        <div className='md:mt-[5px] mx-auto w-max place-content-center'><hr style={{ width: '250px', borderColor: '#75269b', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} review={testimonial.review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
