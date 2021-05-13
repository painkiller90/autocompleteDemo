import React from 'react';
import { getHighlightedText } from '../utils/utils';
import './searchResults.css';

export const SearchResults = ({ results, queryString, ariaControlId }) => {
  return (
    <ul className='search-result' id={ariaControlId}>
      {results.length > 0 ? (
        results.map((row, k) => {
          const title = `${row.title} [${row.labels
            .map((label) => label.name)
            .join(',')}]`;
          return (
            <li className='search-result__item' key={k}>
              <a href='/#'>{getHighlightedText(title, queryString)}</a>
            </li>
          );
        })
      ) : queryString.length > 0 ? (
        <li className='search-result__item search-result__item--empty'>
          No results
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
};
