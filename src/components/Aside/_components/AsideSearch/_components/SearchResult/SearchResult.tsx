import InitialSearch from "../InitialSearch";
import ResultList from "../SearchList";

interface SearchResultProps {
  recent: boolean;
  result: boolean;
}

const SearchResult = (props: SearchResultProps) => {
  const { recent, result } = props;

  if (!recent && !result) return <InitialSearch />;

  if (recent) return <ResultList title="Recent searches" />;

  return <ResultList title="4 results" />;
};

export default SearchResult;
