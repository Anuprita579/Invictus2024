import React from 'react';

const testimonials = [
    {
        id: "person01",
        name: "John Doe",
        person_img_url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "Best Man",
        person_testimonials: "Attending the wedding was a truly memorable experience. The love and joy that filled the air made it a day to cherish forever. Wishing the couple a lifetime of happiness!"
    },
    {
        id: "person02",
        name: "Jane Smith",
        person_img_url: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "Maid of Honor",
        person_testimonials: "Being part of the wedding was an absolute joy. The beautiful ceremony, heartfelt vows, and the celebration afterward were all a testament to the love shared by the couple. I'm grateful to have been a witness to such a special day."
    },
    {
        id: "person03",
        name: "Chris Johnson",
        person_img_url: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.693548172.1671363486&semt=ais",
        person_designation: "Family Friend",
        person_testimonials: "Attending the wedding was like stepping into a fairy tale. The attention to detail, the warmth in the air, and the happiness on the couple's faces created an atmosphere of pure magic. It was an honor to celebrate love with such wonderful people."
    }
];


function Testimonials() {
  return (
    <>
        <div className='flex justify-center items-center px-4 max-lg:flex-col'>
            {testimonials.map((test)=>{
                return(
                    <div key={test.id}>
                        <img src={test.person_img_url} alt="personimg" className='h-20 w-20 rounded-full relative top-16 z-10 border-purple-100 border-2' />
                        <div className='m-3 w-11/12 p-4 bg-purple-100 rounded-xl' >
                            <div className='flex align-middle'>
                                <div className='bg-purple-200 h-20 w-20 relative -top-4 -left-4 rounded-br-full'>  </div>
                                <div className='mt-4'>
                                    <h2 className='font-sans font-bold text-purple-950'>{test.name}</h2>
                                    <h3 className='text-stone-400 italic font-serif'> {test.person_designation}</h3>
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