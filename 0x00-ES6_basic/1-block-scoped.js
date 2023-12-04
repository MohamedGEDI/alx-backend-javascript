export default function taskBlock(trueOrfalse) {
  let task = false;
  let task2 = true;

  if (trueOrfalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
