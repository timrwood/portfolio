export type Skill = {
  age: number;
  name: string;
  location: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export const categories: { [key: string]: SkillCategory } = {};

function addSkill(categoryName: string, age: number, name: string, location: string) {
  categories[categoryName] = categories[categoryName] || { name: categoryName, groups: {} };
  categories[categoryName].skills.push({ age, name, location });
}

addSkill('Design', 10, 'Pen+Ink Drawing', 'Private Art Lessons');
addSkill('Design', 12, 'Watercolor Painting', 'Private Art Lessons');
addSkill('Design', 22, 'Oil Painting', '');

addSkill('Construction', 15, 'Wood Framing & Drywalling', "Carpenter Father's Sidejobs");
addSkill('Construction', 31, 'Concrete Formworking', '');

addSkill('Toolset', 18, 'Photoshop & Illustrator', '');
addSkill('Toolset', 32, 'Physical Model Making', 'UIC');
addSkill('Toolset', 32, 'Orthographic Drawing', 'UIC');
addSkill('Toolset', 32, 'Rhinocerous', 'UIC');
addSkill('Toolset', 35, 'Lumion, TwinMotion, Enscape', 'UIC');
addSkill('Toolset', 38, 'Grasshopper', 'HOK');

addSkill('Marketing', 38, 'TBD', 'TBD');

addSkill('Management', 38, 'TBD', 'TBD');

// film
// teamwork
// finance
// aframe estimates + budgeting
// permitting
// are exams

// Theory

// Design
// Technology
// Construction
// Marketing
// Management
