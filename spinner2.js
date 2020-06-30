let array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timeoutTime = 100;


for (const char of array) {
  setTimeout(() => process.stdout.write(char), timeoutTime)
  timeoutTime += 200
};
