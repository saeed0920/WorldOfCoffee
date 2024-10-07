import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const IdMaker = (username: string, linkdin: string = "nothing") => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [Name, setName] = useState("");
  const [GitHubUrl, setGitHubUrl] = useState("");
  const { t } = useTranslation();
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
      {avatarUrl ? <img src={avatarUrl} alt={`${username}'s profile`} className="rounded-full w-16 h-16" /> : <p>Loading...</p>}
      <div className="flex flex-col w-1/2  gap-2 ">
        {Name ? <span>{Name}</span> : <p>{t("looding")}</p>}
        {GitHubUrl ? (
          <a className="text-blue-400 font-semibold break-words	" href={GitHubUrl}>
            {t("github")}: {GitHubUrl}
          </a>
        ) : (
          <p>{t("looding")}</p>
        )}
        {linkdin ? (
          <button className="flex font-semibold justify-start items-start">
            <a className="text-blue-400 break-words	" href={linkdin}>
              {t("linkdin")} : {linkdin}
            </a>
          </button>
        ) : (
          <p>{t("linkdin_failed")}</p>
        )}
      </div>
    </div>
  );
};

export default IdMaker;
