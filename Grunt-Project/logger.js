function logger() {
  if (count === 10) {
    console.log('Now that\'s a garden!');
  }
  if (count > 50 && count < 75) {
    console.log('Oh man, ' + count + ' tomatoes, what more can you do?');
  }
  if (count === 100) {
    console.log(count + ' tomatoes is too much, you can\'t handle that much acid.');
  }
}
