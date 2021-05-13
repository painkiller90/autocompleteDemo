import { useState, useEffect } from 'react';
import debounce from 'debounce';
import { InputSearch } from '../components/InputSearch';
import { SearchResults } from '../components/SearchResults';
import './appContainer.css';

const AppContainer = () => {
  const [queryString, setQueryString] = useState('');
  const [issuesData, setIssuesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchGithubData = () => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((data) => data.json())
      .then((json) => {
        setIssuesData(json);
      });
  };

  const filterResults = (queryString) => {
    if (Array.isArray(issuesData) && queryString.length > 1) {
      const regex = new RegExp(queryString, 'gi');
      return issuesData.filter((obj) => obj.title.match(regex));
    }
    return [];
  };

  const debounceSearch = debounce((inputValue) => {
    const filteredResults = filterResults(inputValue);
    setFilteredData(filteredResults);
    setQueryString(inputValue);
  }, 500);

  const handleSearch = ({ target }) => {
    const { value } = target;
    debounceSearch(value);
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className='app-container'>
      <form id='search' role='search'>
        <InputSearch
          placeholder='Search'
          handleSearch={handleSearch}
          ariaControlId={'search-results-id'}
        />
        <SearchResults
          results={filteredData}
          queryString={queryString}
          ariaControlId={'search-results-id'}
        />
      </form>
    </div>
  );
};

export default AppContainer;
