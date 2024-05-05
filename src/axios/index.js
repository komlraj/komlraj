import axios from 'axios';

export const getTweets = async () => {
  try {
    const bearerToken = "AAAAAAAAAAAAAAAAAAAAAMcx9QAAAAAAFWkIjszaCpRn6QVpV2ZoDvILGFc%3DtDlfEE9fdxN7dB3hnioGDEISifCYX8NnW1m9Rl0sqwPdRo2j84";
    
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=react', {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        
      }
    });

    // Handle response data here
    console.log('Tweets:', response.data);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching tweets:', error);
    throw error; // Optional: rethrow the error for further handling
  }
};

