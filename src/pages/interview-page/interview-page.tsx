import { interviewList } from "../../shared/constants/topics";
import { TopicList } from "../../widgets";

const InterviewPage = () => {
  return <TopicList title='Интервью' list={interviewList} />;
};

export default InterviewPage;
