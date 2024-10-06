import { useEffect, useState } from "react";

const IdMaker = (username: string, linkdin: string = "nothing") => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [Name, setName] = useState("");
  const [GitHubUrl, setGitHubUrl] = useState("");

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setAvatarUrl(data.avatar_url);
        setGitHubUrl(data.html_url);
        setName(data.name);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchGitHubProfile();
  }, [username]);

  return (
    <div className="flex gap-5 text-nowrap	  text-base text-white  justify-center h-1/3  ">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${username}'s profile`}
          className="rounded-full w-16 h-16"
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex flex-col w-1/2  gap-2 ">
        {Name ? <span>{Name}</span> : <p>Loading...</p>}
        {GitHubUrl ? (
          <a className="text-blue-400 font-semibold break-words	" href={GitHubUrl}>
            github : {GitHubUrl}
          </a>
        ) : (
          <p>Loading...</p>
        )}
        {linkdin ? (
          <button className="flex font-semibold justify-start items-start">
            <a className="text-blue-400 break-words	" href={linkdin}>
              linkdin : {linkdin}
            </a>
          </button>
        ) : (
          <p>nothing about linkdin profile sorry about thats :/</p>
        )}
      </div>
    </div>
  );
};

export default IdMaker;
