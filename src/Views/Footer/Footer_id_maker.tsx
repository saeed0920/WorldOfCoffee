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
    <div className="flex gap-5  text-base text-white items-center justify-center lg:justify-evenly  ">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${username}'s profile`}
          className="rounded-full w-24 h-24" // Adjust size as needed
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex flex-col  gap-2">
        {Name ? <span>{Name}</span> : <p>Loading...</p>}
        {GitHubUrl ? (
          <a className="text-blue-400" href={GitHubUrl}>
            github : {GitHubUrl}
          </a>
        ) : (
          <p>Loading...</p>
        )}
        {linkdin ? (
          <button>
            <a className="text-blue-400" href={linkdin}>
              linkdin : {linkdin}
            </a>
          </button>
        ) : (
          <p>nothing about linkdin profile sorry about that :/</p>
        )}
      </div>
    </div>
  );
};

export default IdMaker;
