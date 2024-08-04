import { Link } from "react-router-dom";
import PropTypes, { InferProps } from "prop-types";

import { useTranslation } from "react-i18next";

function Navigation({ text }: InferProps<typeof Navigation.propTypes>) {
  const { t } = useTranslation();
  return (
    <Link
      className="text-white scale-100 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-700 transition-all font-medium cursor-pointer playfair"
      to="/"
    >
      {t(`${text}`)}
    </Link>
  );
}

export default Navigation;

Navigation.propTypes = {
  text: PropTypes.string,
};
