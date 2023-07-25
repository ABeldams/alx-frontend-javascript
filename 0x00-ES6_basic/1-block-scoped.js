export default function taskBlock(task, task2) {
  var task = false;
  var task2 = true;

  if (task || task2) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
