export const sortingTopics = {
  "/sorting/0": {
    name: "Пузырьковая сортировка",
    description:
      "Сортировка пузырьком — один из самых известных алгоритмов сортировки. Здесь нужно последовательно сравнивать значения соседних элементов и менять числа местами, если предыдущее оказывается больше последующего. Таким образом элементы с большими значениями оказываются в конце списка, а с меньшими остаются в начале. Этот алгоритм считается учебным и почти не применяется на практике из-за низкой эффективности.",
    task: "Реализовать сортировку пузырьком.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const bubbleSort = (array) => {
    
}

console.log(bubbleSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const bubbleSort =(array) => {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};`,
  },

  "/sorting/1": {
    name: "Сортировка вставками",
    description:
      "При сортировке вставками массив постепенно перебирается слева направо. При этом каждый последующий элемент размещается так, чтобы он оказался между ближайшими элементами с минимальным и максимальным значением.",
    task: "Реализовать сортировку вставками.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const insertionSort = (array) => {

}

console.log(insertionSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = null;
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}`,
  },

  "/sorting/2": {
    name: "Сортировка слянием",
    description:
      "Сортировка слиянием пригодится для таких структур данных, в которых доступ к элементам осуществляется последовательно (например, для потоков). Здесь массив разбивается на две примерно равные части и каждая из них сортируется по отдельности. Затем два отсортированных подмассива сливаются в один.",
    task: "Реализовать сортировку слиянием.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const mergeSort = (array) => {

}

console.log(mergeSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    if (left[0] >= right[0]) sorted.push(right.shift());
  }

  return [...sorted, ...left, ...right];
}`,
  },

  "/sorting/3": {
    name: "Быстрая сортировка",
    description:
      "Этот алгоритм состоит из трёх шагов. Сначала из массива нужно выбрать один элемент — его обычно называют опорным. Затем другие элементы в массиве перераспределяют так, чтобы элементы меньше опорного оказались до него, а большие или равные — после. А дальше рекурсивно применяют первые два шага к подмассивам справа и слева от опорного значения.",
    task: "Реализовать быструю сортировку.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const quickSort = (array) => {

}

console.log(quickSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const start = [];
  const end = [];

  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      start.push(array[i]);
    } else {
      end.push(array[i]);
    }
  }

  return [...quickSort(start), pivot, ...quickSort(end)];
}`,
  },

  "/sorting/4": {
    name: "Сортировка выбором",
    description:
      "Сначала нужно рассмотреть подмножество массива и найти в нём максимум (или минимум). Затем выбранное значение меняют местами со значением первого неотсортированного элемента. Этот шаг нужно повторять до тех пор, пока в массиве не закончатся неотсортированные подмассивы.",
    task: "Реализовать сортировку выбором.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const selectionSort = (array) => {

}

console.log(selectionSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const selectionSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}`,
  },

  "/sorting/5": {
    name: "Сортировка Шелла",
    description:
      "лгоритм сортировки, являющийся усовершенствованным вариантом сортировки вставками. Идея метода Шелла состоит в сравнении элементов, стоящих не только рядом, но и на определённом расстоянии друг от друга. Иными словами — это сортировка вставками с предварительными «грубыми» проходами.",
    task: "Реализовать сортировку Шелла.",
    examples: {
      "Пример 1:": [
        "Входные данные: array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
      "Пример 2:": ["Входные данные: array = [5, 10, 25, 15, 1, 4, 3, 2]", "Вывод: [1, 2, 3, 4, 5, 10, 15, 25]"],
    },
    defaultSolution: `const shellSort = (array) => {

}

console.log(shellSort([5, 10, 25, 15, 1, 4, 3, 2]))`,
    answer: `const shellSort = (array) => {
  let length = array.length;

  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < length; i += 1) {
      let temp = array[i];

      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }
  }

  return array;
}`,
  },
};
