export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c1621268emsh1f286a764e6c365p1457c4jsna42dc15d4ecd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9367c8d3f8msh5bd8c23bceb3e19p17e65djsnfa6265a34c1a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
