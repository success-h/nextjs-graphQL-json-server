"use client";
import { ChangeEvent, useRef, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const CREATE_POST = gql`
  mutation createPost($title: String!, $views: Int!) {
    createPost(title: $title, views: $views) {
      id
      title
      views
    }
  }
`;
export function CreatePost() {
  const [input, setInput] = useState({
    title: "",
    views: "",
  });
  const router = useRouter();

  console.log({ input });

  const [addPost] = useMutation(CREATE_POST);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Get the name and value from the input fields
    const { name, value } = event.target;

    // Update the state by creating a new object with the existing state and the updated field
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit() {
    const res = await addPost({
      variables: {
        title: input.title,
        views: Number(input.views),
      },
    });
    const data = await res.data;
    if (data) {
      router.push("/");
    }

    console.log({ data });
  }
  return (
    <div>
      <div className="mx-auto card w-96 bg-base-100 shadow-xl mt-20">
        <div className="card-body">
          <h2 className="card-title">Create User</h2>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            value={input.title}
            onChange={handleChange}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Enter views"
            name="views"
            value={input.views}
            onChange={handleChange}
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <div className="card-actions justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
