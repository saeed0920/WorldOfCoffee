import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Avatar } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function IdMaker({ username, linkedin }: { username: string; linkedin: string }) {
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
    <div className="flex gap-5 md:gap-2 text-base text-white p-2 rounded-md shadow-lg justify-center bg-coffee-brown/70 md:text-sm sm:text-xs hover:scale-110 transition-all hover:shadow-md ">
      <Avatar size={{ base: "md", lg: "lg" }} name={username} src={avatarUrl} />
      <div className="flex flex-col gap-2 md:gap-1">
        {Name ? <span className="font-bold">{Name}</span> : <p>{t("loading")}</p>}
        {GitHubUrl ? (
          <Link href={GitHubUrl} isExternal>
            {t("github")} <ExternalLinkIcon mx="2px" />
          </Link>
        ) : (
          <p>{t("loading")}</p>
        )}
        {linkedin ? (
          <Link href={linkedin} isExternal>
            {t("linkedin")} <ExternalLinkIcon mx="2px" />
          </Link>
        ) : (
          <p>{t("linkedin_failed")}</p>
        )}
      </div>
    </div>
  );
}

export default IdMaker;
