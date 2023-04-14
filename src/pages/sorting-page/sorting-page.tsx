import { sortingList } from "../../shared/constants/topics/sorting/sorting";
import { TopicList } from "../../widgets";

const SortingPage = () => {
  return <TopicList title='Сортировки' list={sortingList} />;
};

export default SortingPage;
