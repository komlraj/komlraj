import React, { useState, useEffect } from "react";
import { getTweets } from "../axios/index"; // Importing the function to fetch tweets

const TweetsComponent = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await getTweets(); // Call the getTweets function to fetch tweets
        setTweets(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTweets();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Tweets</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsComponent;
