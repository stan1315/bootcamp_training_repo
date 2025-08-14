var record = [
  {
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" }
    ]
  },
  {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" },
      { "Skill": "SAP ABAP" }
    ]
  },
  {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [
      { "Skill": "SAP HANA" }
    ]
  }
];

let maxSkills = 0;
let personWithMostSkills = {};

record.forEach(person => {
  const skillCount = person.SkillSet.length;
  if (skillCount > maxSkills) {
    maxSkills = skillCount;
    personWithMostSkills = person;
  }
});

console.log(`Name: ${personWithMostSkills.Name}`);
console.log(`Age: ${personWithMostSkills.Age}`);