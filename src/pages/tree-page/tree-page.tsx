import { treeList } from "../../shared/constants/topics";
import { TopicList } from "../../widgets";

const TreePage = () => {
  return <TopicList title='Деревья' list={treeList} />;
};

export default TreePage;
