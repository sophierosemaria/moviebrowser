import Hero from "./Hero";

//TMDB API KEY = 11212f71e357d9fe6b5473b65bd724b6
//Example link for movie searches = https://api.themoviedb.org/3/search/company?api_key=11212f71e357d9fe6b5473b65bd724b6&query=star%20wars&page=1

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    return (
      <li key={obj.original_title}>
        {obj.original_title}
      </li>
    )
})
  return (
    <>
      <Hero text={title} />
      <ul>{resultsHtml}</ul>
    </>
  );
};

export default SearchView;
