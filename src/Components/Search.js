import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
import SearchCard from './SearchCard';
import FilterBox from './FilterBox';

const wedDest = [
    {id: "001",destination: "Agra"},
    {id: "002",destination: "Ahmedabad"},
    {id: "003",destination: "Alibagh"},
    {id: "004",destination: "Allahabad"},
    {id: "005",destination: "Amritsar"},
    {id: "006",destination: "Aurangabad"},
    {id: "007",destination: "Badrinath"},
    {id: "008",destination: "Banglore"},
    {id: "009",destination: "Bhopal"},
    {id: "010",destination: "Bhubneshwar"},
    {id: "011",destination: "Calicut"},
    {id: "012",destination: "Chandigarh"},
    {id: "013",destination: "Chennai"},
    {id: "014",destination: "Chiplun"},
    {id: "015",destination: "Coorg"},
    {id: "016",destination: "Darjeeling"},
    {id: "017",destination: "Daman"},
    {id: "018",destination: "Delhi"},
    {id: "019",destination: "Dehradun"},
    {id: "020",destination: "Diu"},
    {id: "021",destination: "Faridabad"},
    {id: "022",destination: "Gandhinagar"},
    {id: "023",destination: "Goa"},
    {id: "024",destination: "Guwahati"},
    {id: "025",destination: "Gurgaon"},
    {id: "026",destination: "Gwalior"},
    {id: "027",destination: "Hampi"},
    {id: "028",destination: "Haridwar"},
    {id: "029",destination: "Hyderabad"},
    {id: "030",destination: "Igatpuri"},
    {id: "031",destination: "Imphal"},
    {id: "032",destination: "Indore"},
    {id: "033",destination: "Jabalpur"},
    {id: "034",destination: "Jaipur"},
    {id: "035",destination: "Jalgaon"},
    {id: "036",destination: "Jaisalmer"},
    {id: "037",destination: "Jammu"},
    {id: "038",destination: "Jhansi"},
    {id: "039",destination: "Jodhpur"},
    {id: "040",destination: "Kanpur"},
    {id: "041",destination: "Kedarnath"},
    {id: "042",destination: "Kochin"},
    {id: "043",destination: "Kolhapur"},
    {id: "044",destination: "Kullu"},
    {id: "045",destination: "Ladakh"},
    {id: "046",destination: "Leh"},
    {id: "047",destination: "Lonavala"},
    {id: "048",destination: "Lucknow"},
    {id: "049",destination: "Ludhiana"},
    {id: "050",destination: "Mahabaleshwar"},
    {id: "051",destination: "Malwan"},
    {id: "052",destination: "Manali"},
    {id: "053",destination: "Manglore"},
    {id: "054",destination: "Matheran"},
    {id: "055",destination: "Mount Abu"},
    {id: "056",destination: "Mumbai"},
    {id: "057",destination: "Mysore"},
    {id: "058",destination: "Nagpur"},
    {id: "059",destination: "Nainital"},
    {id: "060",destination: "Nashik"},
    {id: "061",destination: "Noida"},
    {id: "062",destination: "Ooty"},
    {id: "063",destination: "Patiala"},
    {id: "064",destination: "Patna"},
    {id: "065",destination: "Pondicherry"},
    {id: "066",destination: "Pune"},
    {id: "067",destination: "Raipur"},
    {id: "068",destination: "Rajkot"},
    {id: "069",destination: "Ranchi"},
    {id: "070",destination: "Ratnagiri"},
    {id: "071",destination: "Satara"},
    {id: "072",destination: "Shimla"},
    {id: "073",destination: "Srinagar"},
    {id: "074",destination: "Thane"},
    {id: "075",destination: "Tirupati"},
    {id: "076",destination: "Udupi"},
    {id: "077",destination: "Ujjain"},
    {id: "078",destination: "Vadodara"},
    {id: "079",destination: "Varanasi"},
    {id: "080",destination: "Vellore"}
  ];  

function Search() {
    const [searchText, setSearchText] = useState("");
    const [filterBox, setFilterBox] = useState(false);
    const [suggestion, setSuggestion] = useState([]);
    const toggleFilterBox = () => {
      setFilterBox(!filterBox);
    }
    //Debounce Function
    function debounce(func, delay){
      let timeoutId;
      return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
          func(...args);
        }, delay);
      };
    }

    const handleChange = (e)=>{
      const value = e.target.value;
      setSearchText(value);
      //Debounce
      debounceSearch(value);
    }
    const debounceSearch = debounce((value)=>{
      const filterData = wedDest.filter((dest)=>dest.destination.toLowerCase().includes(value.toLowerCase()));
      setSuggestion(filterData);
    }, 300);

    const handleSuggestion = (suggest) => {
      setSearchText(suggest.destination);
      setSuggestion([]);
    }
  return (
    <>
        <div className='flex flex-col items-center align-middle bg-blue-800 w-full' >
          <div className='w-full text-center'>
            <input className='w-3/5 h-10 rounded-l-full px-5 mt-4 outline-blue-200' type="text" value={searchText} placeholder='Search for job location' onChange={handleChange}/>
            <button className='bg-blue-300 font-bold text-black px-2 h-10 mt-4' >Search</button>
            <button value={filterBox} onClick={toggleFilterBox} ><TuneIcon  className='ml-4 text-white' fontSize='medium' /></button>
            <div className='flex justify-center relative right-10'>
              {suggestion.length>0 && (
                <ul className='bg-blue-100 w-3/5 max-h-32 overflow-y-scroll scroll-smooth text-left'>
                  {suggestion.map((suggest, index)=>{
                    return(
                      <li key={index} className='pl-4' onClick={()=>{handleSuggestion(suggest)}}>{suggest.destination}</li>
                    )
                  })}
                </ul>
                
              )}
            </div>
            
            <div>
              {filterBox? <FilterBox /> : null}
            </div>

            <div>
              <SearchCard />
            </div>
            
          </div>


          <iframe src="https://www.google.com.qa/maps/d/u/0/embed?mid=18M6C0EywIdNz1Ji14xkF8lvcaUaA7sc&ehbc=2E312F&noprof=1" width="640" height="480" className='m-4 mb-10' title='internshipmap'></iframe>
  
            
                      
        </div> 

        
    </>
  )
}

export default Search
