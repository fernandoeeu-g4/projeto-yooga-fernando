export function fakeRandomDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
