async function add(numbers) {
  try {
    if (!numbers) return Promise.resolve({ answer: 0 });
    if (!isNaN(numbers) && !!parseInt(numbers))
      return Promise.resolve({ answer: +numbers > 1000 ? 0 : +numbers });

    const allNumbers = await extractNumber(numbers);
    const negativeNumbers = allNumbers?.filter((x) => x < 0);
    if (negativeNumbers?.length)
      throw new Error(
        `Negative numbers not allowed ${negativeNumbers?.join(",")}`
      );
    return Promise.resolve({
      answer: allNumbers?.reduce((a, c) => a + (c > 1000 ? 0 : c), 0),
    });
  } catch (err) {
    return Promise.reject(err);
  }
}

async function extractNumber(numbers) {
  try {
    let delimiters = [","];
    let allNumbers = numbers;
    if (numbers?.startsWith("//")) {
      let regex = /^\/\/(.*?)\\n/;
      if (numbers?.match(regex)?.[1]) {
        delimiters = [numbers?.match(regex)?.[1]];
        allNumbers = numbers.replace(regex, "");
        if (delimiters[0]?.startsWith("[") && delimiters[0]?.endsWith("]")) {
          regex = /\[(.*?)\]/g;
          delimiters = [...numbers.matchAll(regex)].map((match) => match[1]);
        }
      }
    }

    if (allNumbers?.includes("\\n"))
      allNumbers = allNumbers?.replace("\\n", "");

    delimiters?.forEach((d) => {
      allNumbers = allNumbers?.replace(d, ",");
    });

    allNumbers?.split(",").forEach((element) => {
      if (isNaN(+element)) {
        throw new Error("Entries are not numbers");
      }
    });
    
    return Promise.resolve(allNumbers?.split(",")?.map((x) => +x));
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  add,
};
