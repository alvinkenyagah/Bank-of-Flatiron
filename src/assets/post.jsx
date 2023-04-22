import React from "react";

export default function PostTransaction() {
  return (
    <div>
      <form>
        <label for="Date">Date</label>
        <input
          type="date"
          placeholder="Enter Date"
          style={{ marginLeft: "5px" }}
        />

        <input
          type="text"
          placeholder="Enter Description"
          style={{ marginLeft: "5px" }}
        />
        <input
          type="text"
          placeholder="Enter Category"
          style={{ marginLeft: "5px" }}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          style={{ marginLeft: "5px" }}
        />
        <input type="submit" value="SUBMIT" style={{ marginLeft: "5px" }} />
      </form>
    </div>
  );
}
