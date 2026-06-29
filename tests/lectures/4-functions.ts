function say(value = 'Yuriu', value1: string, value2: number) {
  value = value || 'test';
  console.log(`Hello ${value}`);
}
say();
