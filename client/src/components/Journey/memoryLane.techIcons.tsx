import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const ICON_SIZE = "text-[9px]";

export const techIconMap: Record<string, JSX.Element> = {
  HTML: <FontAwesomeIcon icon={faHtml5} className={ICON_SIZE} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} className={ICON_SIZE} />,
  JavaScript: <FontAwesomeIcon icon={faJs} className={ICON_SIZE} />,
  React: <FontAwesomeIcon icon={faReact} className={ICON_SIZE} />,
  GitHub: <FontAwesomeIcon icon={faGithub} className={ICON_SIZE} />,
  NodeJS: <FontAwesomeIcon icon={faNodeJs} className={ICON_SIZE} />,
  Bootstrap: <FontAwesomeIcon icon={faBootstrap} className={ICON_SIZE} />,
};
