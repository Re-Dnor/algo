export const prototypeTopics = {
  "/prototype/0": {
    name: "Some",
    description:
      "Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.",
    task: "Реализовать метод some у массивов.",
    examples: {
      "Пример 1:": ["Входные данные: const nums = [1, 2, 3, 4, 5]", "nums.some((i) => i % 2 === 0)", "Вывод: true"],
    },
    defaultSolution: `Array.prototype.some = function() {
  //...
}

const nums = [1, 2, 3, 4, 5];
console.log(nums.some((x) => x % 2 === 0))`,
    answer: `Array.prototype.some = function(cb, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }

  if (typeof cb !== "function") {
    throw new TypeError();
  }

  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      return true;
    }
  }

  return false;
}`,
  },

  "/prototype/1": {
    name: "Map",
    description:
      "Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.",
    task: "Реализовать метод map у массивов.",
    examples: {
      "Пример 1:": [
        "Входные данные: const nums = [1, 2, 3, 4, 5]",
        "nums.map((i) => i * 2)",
        "Вывод: [2, 4, 6, 8, 10]",
      ],
    },
    defaultSolution: `Array.prototype.map = function() {
  //...
}

const nums = [1, 2, 3, 4, 5];
console.log(nums.map((x) => x * 2))`,
    answer: `Array.prototype.map = function(cb, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.map called on null or undefined");
  }

  if (typeof cb !== "function") {
    throw new TypeError();
  }

  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb.call(thisArg, this[i], i, this));
  }

  return res;
}`,
  },

  "/prototype/2": {
    name: "Filter",
    description:
      "Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.",
    task: "Реализовать метод filter у массивов.",
    examples: {
      "Пример 1:": ["Входные данные: const nums = [1, 2, 3, 4, 5]", "nums.filter((i) => i % 2 === 0)", "Вывод: [2, 4]"],
    },
    defaultSolution: `Array.prototype.filter = function() {
  //...
}

const nums = [1, 2, 3, 4, 5];
console.log(nums.filter((x) => x % 2 === 0))`,
    answer: `Array.prototype.filter = function (cb, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.filter called on null or undefined");
  }

  if (typeof cb !== "function") {
    throw new TypeError();
  }

  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};`,
  },
};
