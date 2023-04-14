export const fetchToken = (code: string) => {
  return fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "62a70e6d6fmsh962c5351943e964p1d49e6jsn7032c0b6a375",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      source_code: btoa(code),
      stdin: "",
      language_id: 63,
    }),
  });
};

export const fetchData = (token: string) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  return fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`, options);
};
