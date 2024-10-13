import { apiHandler } from "../util/api";

export const validate = (numbers) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiHandler.post("/solve", { numbers });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
};
