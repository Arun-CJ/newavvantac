import React from "react";

function EditPosts() {
  return (
    <div>
      <div>
        <input type="text" name="title" />
        <textarea rows={4} cols={5} name="body" />
      </div>
    </div>
  );
}

export default EditPosts;
