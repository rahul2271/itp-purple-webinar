// components/Testimonials.js
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'Archna Devi', review: 'My husband and I tried every possible way, but nothing really worked for us. Panchkarma therapies and Ayurveda truly helped us, and we are now expecting.' },
    { name: 'Sunita Devi', review: 'After struggling with infertility for years and trying numerous treatments, Dr. Suhas provided a holistic solution that finally worked. The personalised care and herbal remedies made all the difference, and I’m now blessed with a healthy baby!' },
    { name: 'Swati', review: 'I can’t thank Yukti Herbs enough for their role in helping me achieve pregnancy. Their Ayurvedic treatments and supportive care helped resolve my infertility issues after many unsuccessful attempts.' },
    { name: 'Isha', review: 'I had almost given up on my dream of becoming a mother until I found Yukti Herbs. Their holistic treatments and expert advice were the key to overcoming my infertility issues.' },
    { name: 'Supriya Sharma', review: 'After having one child, I faced difficulties in conceiving again. I consulted Dr. Suhas at Yukti Herbs, and his treatment helped me successfully conceive.' },

    { name: 'Jaya mishra', review: 'I tried many treatments to conceive without success, but Dr. Suhas’s Ayurvedic approach really helped. His personalised care made a big difference, and I’m now expecting.' },
    { name: 'Aditi Gaur', review: 'Hormone imbalance was the main cause of my infertility, but Dr. Suhas’s treatment effectively resolved this issue and helped me conceive.' },
    { name: 'Neha', review: 'I had lost hope after many failed attempts to conceive, but Yukti Herbs and their doctors  gave me new hope. Their natural approach to fertility and treatments were incredibly effective. I’m so grateful for their support.' },
    { name: 'Priya Mahajan', review: 'I was deeply saddened by my inability to conceive, but Dr. Suhas’s focus on addressing the root cause of my infertility greatly helped me overcome this condition.' },
    // Add more testimonials as needed
  ];

  return (
    <div id='testimonials' className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-5xl font-regular text-center text-[#47126B] mb-8">Customer Testimonials</h2>
        <div className='md:mt-[5px] mx-auto w-max place-content-center'><hr style={{ width: '250px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
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
