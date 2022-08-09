export const exerciseOption = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '65645fc005msha2ee4c323ac3ce9p185bbbjsnb07068cfcb83',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
  
    params: {q: 'despacito', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '65645fc005msha2ee4c323ac3ce9p185bbbjsnb07068cfcb83',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();
    return data;

}