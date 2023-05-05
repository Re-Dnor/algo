import { prototypeList } from "../../shared/constants/topics";
import { TopicList } from "../../widgets";

const PrototypePage = () => {
  return <TopicList title='Прототипы' list={prototypeList} />;
};

export default PrototypePage;
