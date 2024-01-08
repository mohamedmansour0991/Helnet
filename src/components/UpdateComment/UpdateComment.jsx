import React from "react";
import { CreateComment } from "../ui";
import CreateSubComment from "../ui/createSubComment/createSubComment";

function UpdateComment({ value, data, setEdit, subComment }) {
  return (
    <div>
      <CreateSubComment
        value={value}
        dataComment={data}
        setEdit={setEdit}
        subComment={subComment}
      />
    </div>
  );
}

export default UpdateComment;
