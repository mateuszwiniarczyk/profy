import { type Skill } from "@prisma/client";

type Skills = {
  value: Skill;
  label: string;
}[];

export const skills: Skills = [
  { value: "JAVASCRIPT", label: "JavaScript" },
  {
    value: "PYTHON",
    label: "Python",
  },
  {
    value: "JAVA",
    label: "Java",
  },
  {
    value: "CPP",
    label: "C++",
  },
  {
    value: "RUBY",
    label: "Ruby",
  },
  {
    value: "PHP",
    label: "PHP",
  },
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "SQL",
    label: "SQL",
  },
  {
    value: "REACT",
    label: "React",
  },
  {
    value: "ANGULAR",
    label: "Angular",
  },
  {
    value: "NODEJS",
    label: "NodeJS",
  },
  {
    value: "CSHARP",
    label: "C#",
  },
  {
    value: "SWIFT",
    label: "Swift",
  },
  {
    value: "GO",
    label: "Go",
  },
];

export const experienceLevels = [
  { value: "TRAINEE", label: "Trainee" },
  { value: "JUNIOR", label: "Junior" },
  { value: "MID", label: "Mid" },
  { value: "SENIOR", label: "Senior" },
];

export const jobTypes = [
  { value: "FULL_TIME", label: "Full-time" },
  { value: "PART_TIME", label: "Part-time" },
];

export const employmentTypes = [
  { value: "B2B", label: "B2B" },
  { value: "CONTRACT", label: "Contract" },
  { value: "EMPLOYMENT", label: "Employment" },
];
