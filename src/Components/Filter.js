import React, { useState } from 'react';
import Database from './Database';

const Filter = () => {
    const [title, settitle] = useState(null);
    const [type, settype] = useState(null);
    const [exp, setexp] = useState(0);
    const [datab, setdatab] = useState(false);

    const handleOptionChange = (event) => {
        settitle(event.target.value);
    };
    const handleOptionChange2 = (event) => {
        settype(event.target.value);
    };

    const handleOptionChange3 = (event) => {
        // Convert the value to a string
        const expValue = String(event.target.value);

        // Set the exp state
        setexp(expValue);

    };


    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle the form submission logic here
        console.log('Selected Option (Category):', title);
        console.log('Selected Option (Location):', type);
        setdatab(true)
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Select a Category:</h2>

                    <label>
                        <input
                            type="radio"
                            value="webdevelopment"
                            checked={title === 'webdevelopment'}
                            onChange={handleOptionChange}
                            id="webdevelopmentOption"
                        />
                        Web Development
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="UI-UX"
                            checked={title === 'UI-UX'}
                            onChange={handleOptionChange}
                            id="uiuxOption"
                        />
                        UI-UX
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="AI"
                            checked={title === 'AI'}
                            onChange={handleOptionChange}
                            id="aiOption"
                        />
                        AI
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="ML"
                            checked={title === 'ML'}
                            onChange={handleOptionChange}
                            id="mlOption"
                        />
                        Machine Learning (ML)
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Database"
                            checked={title === 'Database'}
                            onChange={handleOptionChange}
                            id="databaseOption"
                        />
                        Database
                    </label>

                    <p>Selected Category: {title}</p>
                </div>

                <div className="experience-field">
                    <label className="experience-label">Experience Required</label>
                    <input onChange={handleOptionChange3} type="number" className="experience-input" id="experienceYears" placeholder="0" />
                    <p>{exp}</p>
                </div>

                <div>
                    <h2>Select a Location:</h2>

                    <label>
                        <input
                            type="radio"
                            value="hybrid"
                            checked={type === 'hybrid'}
                            onChange={handleOptionChange2}
                            id="hybridOption"
                        />
                        Hybrid
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="remote"
                            checked={type === 'remote'}
                            onChange={handleOptionChange2}
                            id="remoteOption"
                        />
                        Remote
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="onsite"
                            checked={type === 'onsite'}
                            onChange={handleOptionChange2}
                            id="onsiteOption"
                        />
                        Onsite
                    </label>

                    <p>Selected Location: {type}</p>
                </div>

                <button type="submit" >Submit</button>
            </form>

            <div>
                {datab && <Database exp={exp} title={title} type={type} />}
            </div>
        </>

    );
};

export default Filter;