import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaImages, FaVuejs } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaDocker,FaDatabase,FaCode } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML5",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JavaScript",
    img: imgJS,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React JS",
    img: imgReact,
  },
  {
    title: "React JS",
    img: FaCode,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "Docker", img: FaDocker },
  /*{ title: "Vuejs", img: FaVuejs },*/
  { title: "TypeScript", img: SiTypescript },
  { title: "SQL Server", img: FaDatabase },
  { title: "PostgreSql", img: SiPostgresql },
  { title: "Express", img: SiExpress },
];
