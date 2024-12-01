const nemoArr = new Array(10000).fill("nemo");

const findNemo = (arr: string[]) => {
  let t0 = performance.now();

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] = "nemo")) {
      console.log("found nemo");
    }
  }

  let t1 = performance.now();

  console.log(`took ${t1 - t0} ms`);
};

findNemo(nemoArr);
