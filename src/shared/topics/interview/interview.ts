export const interviewTopics = {
  "/interview/0": {
    name: "Слияние двух отсортированных массивов",
    description: "Сортировка массивов — базовая алгоритмическая задача, которую нередко спрашивают на собеседованиях.",
    task: "Дано 2 отсортированных массива, необходимо соединить их в один и отсортировать. Важное правило: нельзя использовать встроенный метод Array.prototype.sort().",
    examples: {
      "Пример 1:": [
        "Входные данные: nums1: [1, 2, 3, 4, 5], nums: [6, 7, 8, 9, 10] ",
        "Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      ],
    },
    defaultSolution: `const mergeArray = (nums1, nums2) => {
    
}

console.log(mergeArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))`,
    answer: `const mergeArray = (nums1, nums2) => {
  const sorted = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) sorted.push(nums1.shift());
    if (nums1[0] >= nums2[0]) sorted.push(nums2.shift());
  }

  return [...sorted, ...nums1, ...nums2];
};`,
  },

  "/interview/1": {
    name: "Сортировка групп",
    description:
      "Очень распространённая задача - это перебор всех элементов массива и обработка каждого элемента некоторой операцией.",
    task: "Дан массив слов анаграмм, необходимо все слова объеденить в отдельные группы массивов",
    examples: {
      "Пример 1:": [
        "Входные данные: arr: ['stop', 'pots', 'otsp', 'appa', 'mama', 'amma']",
        "Вывод: [ [ 'stop', 'pots', 'otsp' ], [ 'appa' ], [ 'mama', 'amma' ] ]",
      ],
    },
    defaultSolution: `const sortGroups = (arr) => {

}

console.log(sortGroups(['stop', 'pots', 'otsp', 'appa', 'mama', 'amma']))`,
    answer: `const sortGroups = (arr) => {
  const pair = {};

  for (let word of arr) {
    const key = word.split("").sort().join("");
    pair[key] = pair[key] ? [...pair[key], word] : [word];
  }

  return Object.values(pair);
};`,
  },

  "/interview/2": {
    name: "Cвойства объекта",
    task: "Вернуть значение объекта содержащее переданный путь",
    examples: {
      "Пример 1:": ["Входные данные: obj: {a: { b: 123, c: {d: 321} }}, path: a.b", "Вывод: 123"],
      "Пример 2:": ["Входные данные: obj: {a: { b: 123, c: {d: 321} }}, path: a.c.d", "Вывод: 321"],
    },
    defaultSolution: `const getProperty = (obj, path) => {

}

console.log(getProperty({a: { b: 123, c: {d: 321} }}, "a.b"))`,
    answer: `const getProperty = (obj, path) => {
  const keys = path.split('');
  return keys.reduce((acc, key) => acc[key] , obj);
};`,
  },
};