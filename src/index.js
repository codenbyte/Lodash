import debounce from "lodash/debounce";
import keyBy from "lodash/keyBy";
import sortedUniq from "lodash/sortedUniq";

console.log(debounce, "*****");
//  **************** debounce ****************
const add = (num1, num2) => num1 + num2;
const test = debounce(() => add(1, 2), 200, { maxWait: 1000 });

//  **************** keyBY ****************
const posts = [
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  { id: "34abc", title: "The blog post we want", content: "..." }
];

const newPosts = keyBy(posts, "id");

const post = newPosts["34abc"];
console.log(post, "post ***");

//  **************** sortedUniq ****************
const sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
const result = sortedUniq(sortedArray);

console.log(result, "result");
