export const leetcodeTopics = {
  "/leetcode/0": {
    name: "Two sum",
    description: "",
    task: "Учитывая массив целых чисел nums и целочисленный taget, вернуть индексы двух чисел так, чтобы они складывались в taget. Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы не можете использовать один и тот же элемент дважды. Вы можете вернуть ответ в любом порядке, в случае отсутсвия taget вернуть [-1, -1];",
    examples: {
      "Пример 1:": ["Входные данные: const nums = [2, 7, 11, 15], const target = 9", "Вывод: [0, 1]"],
      "Пример 2:": ["Входные данные: const nums = [15, 1, 4, 9, 23, 2, 3, 7], const target = 8", "Вывод: [1, 7]"],
    },
    defaultSolution: `const twoSum = (nums, target) => {

}

console.log(twoSum([5, 10, 25, 15, 1, 4, 3, 2], 8))`,
    answer: `const twoSum = function (nums, target) {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (cache.has(diff)) {
      return [cache.get(diff), i];
    } else {
      cache.set(nums[i], i);
    }
  }

  return [-1, -1];
};`,
  },

  "/leetcode/1": {
    name: "Palindrome number",
    description: "",
    task: "Учитывая целое число x, вернуть true, если x является палиндромом, и false в противном случае.",
    examples: {
      "Пример 1:": ["Входные данные: const num = 123", "Вывод: false"],
      "Пример 2:": ["Входные данные: const num = 777", "Вывод: true"],
      "Пример 3:": ["Входные данные: const num = 5", "Вывод: true"],
    },
    defaultSolution: `const palindromeNumber = (num) => {

}

console.log(palindromeNumber(123))`,
    answer: `const palindromeNumber = (num) => {
  return Number(num.toString().split("").reverse().join("")) === num;
};`,
  },

  "/leetcode/2": {
    name: "Roman to integer",
    description: "",
    task: "Дана римская цифра, преобразовать ее в целое число",
    examples: {
      "Пример 1:": ["Входные данные: const str = 'V'", "Вывод: 5"],
      "Пример 2:": ["Входные данные: const str = 'LVIII'", "Вывод: 58"],
    },
    defaultSolution: `const romanToInt = (str) => {

}

console.log(romanToInt('LVIII'))`,
    answer: `const romanToInt = (str) => {
  const schema = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    schema[current] < schema[next] ? (sum -= schema[current]) : (sum += schema[current]);
  }

  return sum;
};`,
  },
  "/leetcode/3": {
    name: "Longest common prefix",
    description: "",
    task: "Напишите функцию, которая находит самую длинную строку общего префикса среди массива строк. Если общего префикса нет, вернуть пустую строку ''.",
    examples: {
      "Пример 1:": ["Входные данные: array = ['flower', 'flow', 'flight']", "Вывод: 'fl'"],
      "Пример 2:": ["Входные данные: const array = ['dog', 'racecar', 'car']", "Вывод: ''"],
    },
    defaultSolution: `const longestCommonPrefix = (array) => {

}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))`,
    answer: `const longestCommonPrefix = (array) => {
  if (array.length <= 0) return "";
  if (array.length === 1) return array[0];

  const word = array[0];
  let res = "";

  for (let i = 0; i <= word.length; i++) {
    const start = word.slice(0, i);

    if (array.every((item) => item.startsWith(start))) {
      res = start;
    } else {
      return res;
    }
  }

  return res;
};`,
  },

  "/leetcode/4": {
    name: "Valid parentheses",
    description: "",
    task: "Учитывая строку s, содержащую только символы '(', ')', '{', '}', '[', ']', определите, допустима ли входная строка. Входная строка действительна, если: Открытые скобки должны быть закрыты однотипными скобками. Открытые скобки должны быть закрыты в правильном порядке. Каждой закрывающей скобке соответствует открытая скобка того же типа.",
    examples: {
      "Пример 1:": ["Входные данные: const str = '()'", "Вывод: true"],
      "Пример 2:": ["Входные данные: const str = '{ [ ) ] }'", "Вывод: false"],
    },
    defaultSolution: `const isValid = (str) => {

}

console.log(isValid('{ [ ) ] }'))`,
    answer: `const isValid = (str) => {
  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const res = [];

  for (const i of str) {
    if (!pair[i]) {
      res.push(i);
    } else if (res.pop() !== pair[i]) {
      return false;
    }
  }

  return res.length === 0;
};`,
  },

  "/leetcode/5": {
    name: "Search insert position",
    description: "",
    task: "Учитывая отсортированный массив различных целых чисел и целевое значение, вернуть индекс, если цель найдена. Если нет, верните индекс туда, где он был бы, если бы он был вставлен по порядку. Вы должны написать алгоритм со сложностью выполнения O(log n).",
    examples: {
      "Пример 1:": ["Входные данные: const nums = [2, 7, 11, 13, 20, 90], target = 30", "Вывод: 5"],
      "Пример 2:": ["Входные данные: const nums = [2, 7, 11, 13, 20, 90], target = 2", "Вывод: 0"],
      "Пример 3:": ["Входные данные: const nums = [], target = 5", "Вывод: 0"],
    },
    defaultSolution: `const searchInsert = (nums, target) => {

}

console.log(searchInsert([2, 7, 11, 13, 20, 90], 30 ))`,
    answer: `const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] < target) start = middle + 1;
    if (nums[middle] > target) end = middle - 1;
  }

  return start;
};`,
  },
};
