function Skills() {
  const skills = [
    "C",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Git & GitHub",
  ];

  return (
    <section>
      <h2>Technical Skills</h2>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;