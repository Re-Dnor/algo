export const searchTopics = {
  "/search/0": {
    name: "Бинарный поиск",
    description:
      "Двоичный (бинарный) поиск (также известен как метод деления пополам или дихотомия) — классический алгоритм поиска элемента в отсортированном массиве (векторе), использующий дробление массива на половины.",
    task: "Реализовать бинарный поиск.",
    examples: {
      "Пример 1:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 10", "Вывод: 9"],
      "Пример 2:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 1", "Вывод: 0"],
      "Пример 3:": ["Входные данные: nums = [1, 5, 10, 15, 20], target = 4", "Вывод: 1"],
    },
    defaultSolution: `const binarySearch = (nums, target) => {
    
}

console.log(binarySearch([1, 5, 10, 15, 20], 20))`,
    answer: `const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    if (nums[mid] < target) start = mid + 1;
  }
  return start;
}`,
  },

  "/search/1": {
    name: "Интерполяционный поиск",
    description:
      "Интерполяционный поиск (интерполирующий поиск) основан на принципе поиска в телефонной книге или, например, в словаре. Вместо сравнения каждого элемента с искомым, как при линейном поиске, данный алгоритм производит предсказание местонахождения элемента: поиск происходит подобно двоичному поиску, но вместо деления области поиска на две части, интерполирующий поиск производит оценку новой области поиска по расстоянию между ключом и текущим значением элемента.",
    task: "Реализовать интерполяционный поиск.",
    examples: {
      "Пример 1:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 10", "Вывод: 9"],
      "Пример 2:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 1", "Вывод: 0"],
      "Пример 3:": ["Входные данные: nums = [1, 5, 10, 15, 20], target = 4", "Вывод: 1"],
    },
    defaultSolution: `const interpolationSearch = (nums, target) => {
    
}

console.log(interpolationSearch([1, 5, 10, 15, 20], 20))`,
    answer: `const interpolationSearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const rangeDelta = nums[right] - nums[left];
    const indexDelta = right - left;
    const valueDelta = target - nums[left];

    if (valueDelta < 0) {
      return -1;
    }
    if (!rangeDelta) {
      return nums[left] === target ? left : -1;
    }
    const middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return -1;
}`,
  },

  "/search/2": {
    name: "Поиск прыжками",
    description:
      "Поиск прыжками говорит сам за себя. Поиск прыгает через определенное количество индексов и ищет первый элемент, который больше искомого значения, отпрыгивает назад и осуществляет линейный поиск с этого места. Поиск заканчивается, когда был или не был найден элемент. Условие поиска - предварительно сортированный массив по возрастанию.",
    task: "Реализовать поиск прыжками.",
    examples: {
      "Пример 1:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 10", "Вывод: 9"],
      "Пример 2:": ["Входные данные: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 1", "Вывод: 0"],
      "Пример 3:": ["Входные данные: nums = [1, 5, 10, 15, 20], target = 4", "Вывод: 1"],
    },
    defaultSolution: `const jumpSearch = (nums, target) => {
    
}

console.log(jumpSearch([1, 5, 10, 15, 20], 20))`,
    answer: `const jumpSearch = (nums, target) => {
  let len = nums.length;

  let step = Math.floor(Math.sqrt(len));

  let blockStart = 0,
    currentStep = step;

  while (nums[Math.min(currentStep, len) - 1] < target) {
    blockStart = currentStep;
    currentStep += step;

    if (blockStart >= len) return -1;
  }

  while (nums[blockStart] < target) {
    blockStart++;

    if (blockStart == Math.min(currentStep, len)) return -1;
  }

  if (nums[blockStart] == target) return blockStart;
  else return -1;
}`,
  },
};
