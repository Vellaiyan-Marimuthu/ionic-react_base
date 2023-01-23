import { useEffect, useState } from "react";

const UseFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, [url]);
  return [data];
};

export default UseFetch;
