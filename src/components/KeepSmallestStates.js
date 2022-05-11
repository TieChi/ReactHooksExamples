/**
 * States can't be used like variables,
 * it's essential to check before adding one state.
 * Less is more, fewer states always mean simpler state management.
 * */

import React, { useCallback, useMemo } from "react";
import { useSearchParam } from "react-use";
import ListData from "../data/ListData.js";

function SearchBox({ data }) {
  const searchKey = useSearchParam("key") || "";
  const filtered = useMemo(() => {
    return data.filter((item) => {
      return item.title.includes(searchKey);
    });
  }, [searchKey, data]);
  const handleSearch = useCallback((event) => {
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?key=${event.target.value}`
    );
    console.log(filtered);
  }, []);

  return (
    <div>
      <input value={searchKey} onChange={handleSearch} />
      <ul style={{ marginTop: 20 }}>
        {filtered.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default () => {
  return <SearchBox data={ListData.data} />;
};
