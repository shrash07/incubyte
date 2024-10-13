import React, { useState } from "react";
import { validate } from "../../services/validate";

export default function Solver() {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValue(e?.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      setLoading(true);
      const { data } = await validate(value);
      setAnswer(data?.answer);
    } catch (err) {
      setError(true);
      setAnswer(err?.response?.data);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Please enter a valid string"
          className="bg-black border-2 p-3 md:w-[30vw] w-[80vw]"
          value={value}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-300 hover:font-bold rounded text-black w-[30%] mx-auto p-3"
        >
          Add
        </button>
      </form>
      {!loading && (
        <div className="text-white flex  gap-3 font-bold text-3xl mt-5 md:w-[30vw] w-[80vw]">
          Answer:{" "}
          <span className={`${error ? "text-red-500" : "text-green-500"}`}>
            {answer}
          </span>
        </div>
      )}
    </div>
  );
}
