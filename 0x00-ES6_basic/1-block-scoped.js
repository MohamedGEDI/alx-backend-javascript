export default function taskBlock(trueOrfalse) {
  const task = false;
  const task2 = true;

  if (trueOrfalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
