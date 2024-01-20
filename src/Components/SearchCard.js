import React from 'react';
import { Link } from 'react-router-dom';

const searchCard = [
    {
        card_id: "1493863641943-9b68992a8d07",
        title: "Machine Learning",
        img_url: "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1705738722~exp=1705739322~hmac=18e23240b4123e41898923c9101496f5f93116ed449ec99cffa04b38b9efce9d"
    },
    {
        card_id: "1491994336086-44f5d76dd8f2",
        title: "Artificial Intelligence",
        img_url: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&ext=jpg&ga=GA1.1.399333540.1695975010&semt=ais"
    },
    {
        card_id: "1621691553102-66d4ecdb1be2",
        title: "Web Development",
        img_url: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.399333540.1695975010&semt=ais"
    },
    {
        card_id: "1414235077428-338989a2e8c0",
        title: "UI UX Development",
        img_url: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?size=626&ext=jpg&ga=GA1.1.399333540.1695975010&semt=ais"
    },
    {
        card_id: "1665783126947-8c98c7b7ac72",
        title: "Database Manager",
        img_url: "https://img.freepik.com/free-vector/server-room-cloud-storage-icon-datacenter-database-concept-data-exchange-process_39422-556.jpg?size=626&ext=jpg&ga=GA1.1.399333540.1695975010&semt=sph"
    },
    
];

function SearchCard() {
  return (
    <>
        <div className='bg-blue-800 m-4 p-4 flex justify-center align-middle rounded-xl flex-wrap'>
            {searchCard.map((card)=>{
                return(
                    <Link to={`/searchFor/${card.title.toLowerCase().replaceAll(' ', '-')}`}>
                        <div key={card.card_id} className='bg-blue-300 m-3 p-3 text-center rounded-xl justify-center align-middle items-center w-32 h-36 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-150'> 
                        <h1 className='text-sm font-bold overflow-ellipsis'>{card.title}</h1>
                        <img src={card.img_url} alt={card.title} className='h-20'/>
                        </div>
                    </Link>
                );
                
            })}
            

        </div>
      
    </>
  )
}

export default SearchCard