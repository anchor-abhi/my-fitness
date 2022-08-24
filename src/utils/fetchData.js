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
    "X-RapidAPI-Key": "9c1621268emsh1f286a764e6c365p1457c4jsna42dc15d4ecd",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
