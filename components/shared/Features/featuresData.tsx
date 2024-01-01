export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Admissions 101",
    description:
      "Understand The Hidden Things Colleges Look for in Applicants, and How to Meet Their Expectations.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Pathways",
    description:
      "Follow a Grade Specfic Step By Step Pathway Filled With Everything Needed To Get Into Your Dream School.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Activities Catalog",
    description:
      "Browse Activities, Summer Internships, and Competitions, All with an Informative Get Started Section.",
  },
];

export default featuresData;
