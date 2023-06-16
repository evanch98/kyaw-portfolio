/* projectObject is for the project Modal */
export type projectObject = {
  title: string;
  sourceSrc: string;
  liveSrc: string;
  date: string;
  category: string;
  tech: string[];
  desc: string[];
  deployedOn?: string;
};

/* certObject is for the certification Modal */
export type certObject = {
  name: string;
  platform: string;
  date: string;
  courses: string[];
  desc: string[];
  verificationLink: string;
}

/* projectModalStore is for the project component's useStore hook */
export type projectModalStore = {
  open: boolean;
  projectData: projectObject;
}
