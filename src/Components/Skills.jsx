import React from "react";
import {
  IconHtml,
  IconTailwindCss,
  IconCss3,
  IconJavascript,
  IconReact,
  IconPostgresql,
  IconNodejs,
} from "../Icons/Icons";
import "../css/Skills.css";

export default function Skills() {
  const skills = [
    {icon:<IconHtml/> , name: 'HTML'},
    {icon:<IconTailwindCss/> , name: 'Tailwind'},
    {icon:<IconCss3/> , name: 'CSS'},
    {icon: <IconJavascript/>, name: 'Java Script'},
    {icon: <IconReact/>, name: 'React'},
    {icon: <IconPostgresql/> , name: 'PostgreSql'},
    {icon: <IconNodejs/> , name: 'Nodejs'},
  ]
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <ul>
        { skills.map((skill, index) => (
          <li key={index}>
            <div>{skill.icon}</div>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
