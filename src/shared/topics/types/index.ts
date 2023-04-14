type ExamplesType = Record<string, string[]>;

export type Topic = {
  name: string;
  description?: string;
  task: string;
  examples: ExamplesType;
  defaultSolution: string;
  answer: string;
};

export type TopicsType = Record<string, Topic>;
