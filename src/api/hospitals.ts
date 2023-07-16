export const fetchProviders = async () => {
    try {
      const response = await fetch("https://api.reliancehmo.com/v3/providers");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  