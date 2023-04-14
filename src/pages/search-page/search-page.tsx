import { searchList } from "../../shared/constants/topics";
import { TopicList } from "../../widgets";

const SearchPage = () => {
  return <TopicList title='Поиск' list={searchList} />;
};

export default SearchPage;
