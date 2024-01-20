import React from 'react';

const testimonials = [
    {
        id: "person01",
        name: "John Doe",
        person_img_url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "Full Stack Web Developer",
        person_testimonials: "Finding internships with real-world projects and collaborative teams made my learning journey at Internship Finder truly valuable. Highly recommended!"
    },
    {
        id: "person02",
        name: "Jane Smith",
        person_img_url: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "UI UX Developer",
        person_testimonials: "Internship Finder provided me with opportunities to explore my passion for UI/UX design. The real-world projects allowed me to apply my skills and build a strong portfolio."
    },
    {
        id: "person03",
        name: "Chris Johnson",
        person_img_url: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "Software Developer",
        person_testimonials: "Internship Finder was a game-changer for my career. The hands-on experience and mentorship from industry experts helped me transition smoothly into the world of software development."
    }
];


function Testimonials() {
  return (
    <>
        <div className='flex justify-center items-center px-4 max-lg:flex-col'>
            {testimonials.map((test)=>{
                return(
                    <div key={test.id}>
                        <img src={test.person_img_url} alt="personimg" className='h-20 w-20 rounded-full relative top-16 z-10 border-blue-300 border-2' />
                        <div className='m-3 w-11/12 p-4 bg-blue-300 rounded-xl' >
                            <div className='flex align-middle'>
                                <div className='bg-blue-800 h-20 w-20 relative -top-4 -left-4 rounded-br-full'>  </div>
                                <div className='mt-4'>
                                    <h2 className='font-sans font-bold text-purple-950'>{test.name}</h2>
                                    <h3 className='text-stone-600 italic font-serif'> {test.person_designation}</h3>
                                </div>

                            </div>
                            <p className='text-stone-600 my-2 italic'>&ldquo; {test.person_testimonials} &rdquo; </p>
                        </div> 

                    </div>
                )
            })}
        </div>
        
        
    </>
  )
}

export default Testimonials