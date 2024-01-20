import React from 'react';
import { Link } from 'react-router-dom';

const searchCard = [
    {
        card_id: "1493863641943-9b68992a8d07",
        title: "Photographer",
        img_url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        card_id: "1491994336086-44f5d76dd8f2",
        title: "Florist",
        img_url: "https://images.unsplash.com/photo-1491994336086-44f5d76dd8f2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        card_id: "1414235077428-338989a2e8c0",
        title: "Caterers",
        img_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        card_id: "1665783126947-8c98c7b7ac72",
        title: "Bridal Shop",
        img_url: "https://images.unsplash.com/photo-1665783126947-8c98c7b7ac72?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        card_id: "1621691553102-66d4ecdb1be2",
        title: "Makeup Artist",
        img_url: "https://images.unsplash.com/photo-1621691553102-66d4ecdb1be2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        card_id: "1513866942102-cfdd82745c6a",
        title: "DJ",
        img_url: "https://images.unsplash.com/photo-1513866942102-cfdd82745c6a?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

function SearchCard() {
  return (
    <>
        <div className='bg-purple-100 m-4 p-4 flex justify-center align-middle rounded-xl flex-wrap'>
            {searchCard.map((card)=>{
                return(
                    <Link to={`/searchFor/${card.title.toLowerCase().replaceAll(' ', '-')}`}>
                        <div key={card.card_id} className='bg-purple-300 m-3 p-3 text-center rounded-xl justify-center align-middle items-center w-32 h-32 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-150'> 
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