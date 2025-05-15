import Topics from "@/app/neclicense/data/topics";

// Define a simplified Topic interface with only the fields we need
interface SimplifiedTopic {
  uid: string;
  title: string;
  slug: string;
  chapter: {
    uid: string;
    title: string;
    slug: string;
  };
}

/**
 * Fetches topics for a given slug/program and returns only specific fields
 *
 * @param slug - The slug or program ID to fetch topics for
 * @returns An array of arrays containing simplified topic objects
 */
const fetchTopics = async (slug: string): Promise<any> => {
  try {
    // Get raw data from the Topics function
    const data = await Topics(slug);

    // Check if data exists and is an array
    if (!data || !Array.isArray(data)) {
      console.log("Data is not an array:", data);
      return []; // Return empty array
    }

    // Return the actual data structure without additional processing
    // This will maintain the exact structure received from the API: [[{},{}...],[],[],...]
    return data;
  } catch (error) {
    console.error("Error fetching topics:", error);
    return []; // Return empty array on error
  }
};

export default fetchTopics;
