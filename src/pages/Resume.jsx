import { CircularProgressbar } from "react-circular-progressbar";
export default function Resume() {
  const skills = [
    {
      name: "HTML",
      value: 95,
    },
    {
      name: "CSS",
      value: 75,
    },
    {
      name: "JAVASCRIPT",
      value: 70,
    },
    {
      name: "REACT",
      value: 60,
    },
  ];
  const languages = [
    {
      name: "english",
      value: 70,
    },
    { name: "Urdu", value: 80 },
  ];

  return (
    <div className="resume">
      <h1 className="bold">MY SKILLS</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <CircularProgressbar
              // className="CircularProgressbar-inverted"
              value={skill.value}
              text={`${skill.value}%`}
            />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
      <h1 className="bold">Languages</h1>
      <div className="skills">
        {languages.map((lng, index) => (
          <div className="skill" key={index}>
            <CircularProgressbar
              // className="CircularProgressbar-inverted"
              value={lng.value}
              text={`${lng.value}%`}
            />
            <h3>{lng.name}</h3>
          </div>
        ))}
      </div>
      <div className="Education">
        <h1>Education</h1>
        <h2 className="my-10">BTECH in Computer Science</h2>
        <h3>GCET Kashmir</h3>
      </div>
    </div>
  );
}
