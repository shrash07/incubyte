async function add(numbers) {
  try {
    if (!numbers) return Promise.resolve({ answer: 0 });
    const allNumbers = await extractNumber(numbers);
    const negativeNumbers = allNumbers?.filter((x) => x < 0);
    if (negativeNumbers?.length)
      throw new Error(
        `Negative numbers not allowed ${negativeNumbers?.join(",")}`
      );
    return Promise.resolve({ answer: allNumbers?.reduce((a, c) => a + c, 0) });
  } catch (err) {
    return Promise.reject(err);
  }
}

async function extractNumber(numbers) {
  try {
    let delimeiter = ",";
    if (numbers?.startsWith("//")) {
      delimeiter = numbers?.match(/^\/\/(.*?)\\n/)?.[1];
    }
    let allNumbers = numbers.replace(/^\/\/(.*?)\\n/, "");
    if (allNumbers?.includes("\n")) allNumbers?.replace("\n", "");
    allNumbers.split(delimeiter).forEach((element) => {
      if (isNaN(+element)) {
        throw new Error("Entries are not numbers");
      }
    });
    return Promise.resolve(allNumbers?.split(delimeiter)?.map((x) => +x));
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  add,
};
