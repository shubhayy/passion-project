export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  path: string
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "assets/icons/college.svg",
    title: "Admissions 101",
    description:
      "Understand The Hidden Things Colleges Look for in Applicants, and How to Meet Their Expectations.",
    path: "/admissions",
  },
  {
    id: 2,
    icon: "assets/icons/path.svg",
    title: "Pathways",
    description:
      "Follow a Grade Specfic Step By Step Pathway Filled With Everything Needed To Get Into Your Dream School.",
    path: "/pathway"
  },
  {
    id: 3,
    icon: "assets/icons/catalog.svg",
    title: "Activities Catalog",
    description:
      "Browse Activities, Summer Internships, and Competitions, All with an Informative Get Started Section.",
    path: "/catalog"
  },
];

export default featuresData;
