import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const gitdata = useLoaderData();

  // const [gitdata, setGitdata] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/rehman-0307748")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGitdata(data);
  //       console.log(data);
  //     });
  // }, []); // Runs only once when component mounts
  return (
    <>
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Github Followers: {gitdata.followers} Following: {gitdata.following}
      </h1>
      <img
        className="mx-auto rounded-full"
        src={gitdata.avatar_url}
        alt="Github Profile Photo"
        height="200px"
        width="200px"
      />
      <ul className="text-center text-lg font-medium">
        <li>Name: {gitdata.name}</li>{" "}
        <li>Email: {gitdata.email}? "Email is Null" </li>{" "}
      </ul>
    </>
  );
}

export default Github;

export const githubloader = async () => {
  const response = await fetch("https://api.github.com/users/rehman-0307748");
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user data");
  }
  return response.json();
};
