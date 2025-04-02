import React, { useEffect, useState } from 'react';
import axios from 'axios';

function New() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Declare the function as async for using await inside
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/register-user");
                console.log(response.data);  // Log the response from the server
                setData(response.data);  // Store the data in the state
            } catch (error) {
                console.error("Error fetching data:", error);  // Handle error
            }
        };

        fetchData();  // Call the fetchData function
    }, []);  // Empty dependency array means this will run once when the component mounts

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Display the fetched data */}
        </div>
    );
}

export default New;
