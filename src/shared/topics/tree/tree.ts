export const treeTopics = {
  "/tree/0": {
    name: "Поиск в глубину",
    description:
      "Поиск в глубину (Depth-first search, DFS). В отличие от обхода в ширину, этот метод подойдет, если вы подозреваете, что нужный элемент находится внизу дерева и оно «узкое». Но если ваша цель — полностью обойти дерево, то этот способ по производительности ровно такой же, как и предыдущий.",
    task: "Реализовать обход в глубину",
    examples: {
      "Пример 1:": [
        `Входные данные: const tree = {
        value: 1,
        children: [
          {
            value: 2,
            children: [
              {
                value: 5,
                children: [{ value: 6 }, { value: 7, children: [{ value: 8 }, { value: 9 }] }],
              },
            ],
          },
          {
            value: 3,
            children: [{ value: 10 }],
          },
          {
            value: 4,
          },
        ],
      }, target = 10`,
        "Вывод: [1, 2, 5, 6, 7, 8, 9, 3, 10, 4]",
      ],
    },
    defaultSolution: `const DFS = (tree) => {

}

console.log(DFS({
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 5,
          children: [{ value: 6 }, { value: 7, children: [{ value: 8 }, { value: 9 }] }],
        },
      ],
    },
    {
      value: 3,
      children: [{ value: 10 }],
    },
    {
      value: 4,
    },
  ],
}))`,
    answer: `const DFS = (tree) => {
  const res = [];

  const recursive = (node) => {
    if (node?.value) res.push(node.value);
    if (node?.children) {
      node.children.forEach((chl) => {
        recursive(chl);
      });
    }
  };

  recursive(tree);
  return res;
}`,
  },

  "/tree/1": {
    name: "Поиск в ширину",
    description:
      "Поиск в ширину (Breadth-first search, BFS), суть этого обхода довольно проста: мы сначала просматриваем все элементы на одном уровне вложенности, а затем переходим на следующий и следующий, пока не обойдём всё. Этот алгоритм хорошо подходит для поиска, если вы знаете, что искомый элемент, скорее всего, лежит «сверху» и есть основания полагать, что дерево довольно широкое",
    examples: {
      "Пример 1:": [
        `Входные данные: const tree = {
        value: 1,
        children: [
          {
            value: 2,
            children: [
              {
                value: 5,
                children: [{ value: 6 }, { value: 7, children: [{ value: 8 }, { value: 9 }] }],
              },
            ],
          },
          {
            value: 3,
            children: [{ value: 10 }],
          },
          {
            value: 4,
          },
        ],
      }, target = 10`,
        "Вывод: [1, 2, 3, 4, 5, 10, 6, 7, 8, 9]",
      ],
    },
    task: "Реализовать обход в ширину.",
    defaultSolution: `const BFS = (tree) => {

}

console.log(DFS({
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 5,
          children: [{ value: 6 }, { value: 7, children: [{ value: 8 }, { value: 9 }] }],
        },
      ],
    },
    {
      value: 3,
      children: [{ value: 10 }],
    },
    {
      value: 4,
    },
  ],
}))`,
    answer: `const BFS = (tree) => {
      const res = [];
      const queue = [];
    
      queue.push(tree);
    
      while (queue.length) {
        const node = queue.shift();
    
        if (node?.value) res.push(node.value);
        if (node?.children) {
          node.children.forEach((chl) => {
            queue.push(chl);
          });
        }
      }
    
      return res;
    }`,
  },
};
