import React from 'react';
import MarqueeCB from "react-fast-marquee";

const companyBrands = [
    {
        id: "001",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/fMCqmt8qR4G85Puue/J6Md4cccXnq7kokNB/1656480508804/BOALOGO%201.png",
    },
    {
        id: "002",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/o7HHQLXWRQMXdXE4P/jRvR66mwdjMQyHZ29/1634063817475/lululemon_Yogotype_RGB_CLR.png",
    },
    {
        id: "003",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/prBZoAihniNijyD6d/CSN4y3ePwJCyRZTtj/1638311453195/GlobalTech_Logo_EXTERNAL_greenblue.png",
    },
    {
        id: "004",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/ZtgA28qyexifyEdHE/X4TxXYQuNpSotbsFR/JPM_Logo_White_1324x300px.png",
    },
    {
        id: "005",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/DMrpG9KbbePZxGfSN/gJAzYWCDjzAsPxgYP/Acc_Logo_Black_Purple_RGB.png",
    },
    {
        id: "006",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/P2whMfgG9v48cqWwx/dpN7PmoeCuNXx6YCQ/1638815534276/RB_Standard_Logo_cmyk_2017.png",
    },
    {
        id: "007",
        img_src: "https://cdn.theforage.com/vinternships/companyassets/MBA4MnZTNFEoJZGnk/prcj7XmSCJazax8LQ/GS_Box_Blue%20300dpi.png",
    },
]

function Marquee() {
  return (
    <>
        <MarqueeCB pauseOnHover>
        <div className='flex overflow-hidden whitespace-nowrap'>
            {companyBrands.map((mar)=>{
                return(
                    <div key={mar.id} className='px-10'>
                        <img src={mar.img_src} alt='company' className='h-20'/>
                    </div>
                    
                )
            })} 

        </div>
        </MarqueeCB>
        
    </>
  )
}

export default Marquee
