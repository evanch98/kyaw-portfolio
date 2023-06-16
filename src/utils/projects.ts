import type { projectObject } from "~/types/types";

/* Projects's data */

export const portfolioWebsite: projectObject = {
  title: "Portfolio Website",
  sourceSrc: "https://github.com/evanch98/kyaw-portfolio",
  liveSrc: "/",
  date: "6/12/2023",
  category: "Hobby project",
  tech: ["Qwik", "Qwik City", "TypeScript", "Tailwind CSS", "Motion One"],
  desc: ["Simple portfolio website"],
};

export const project1: projectObject = {
  title: "Airbnb Clone",
  sourceSrc: "https://github.com/evanch98/airbnb_clone_react",
  liveSrc: "https://rent-house-react-hopf81d0y-evanch98.vercel.app/",
  date: "5/8/2023",
  category: "Hobby project",
  tech: [
    "Next JS",
    "NextAuth",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "MongoDB",
    "Cloudinary",
  ],
  desc: [
    "Core Airbnb features",
    "Email login, GitHub login, and Google login",
    "MongoDB for data persistence",
    "NextAuth authentication",
    "Next JS 13 App Router",
    "Users can view listings listed by other users",
    "Users can make reservations based on their preferences",
    "Users can list their properties and upload their properties image",
  ],
};

export const project2: projectObject = {
  title: "Share Prompts",
  sourceSrc: "https://github.com/evanch98/share-prompts-nextjs",
  liveSrc: "https://share-prompts-taupe.vercel.app/",
  date: "5/25/2023",
  category: "Hobby project",
  tech: [
    "Next JS",
    "NextAuth",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
  ],
  desc: [
    "Google login",
    "MongoDB for data persistence",
    "NextAuth authentication",
    "Users can share their favorite prompts they used for AI-powered tools such as ChatGPT",
    "Users can see prompts shared by other users",
    "Users can copy the prompts",
    "Users can edit their prompts",
  ],
};

export const project3: projectObject = {
  title: "Chess",
  sourceSrc: "https://github.com/evanch98/chess-javascript",
  liveSrc: "",
  date: "6/16/2023",
  category: "Hobby project",
  tech: ["JavaScript", "HTML", "CSS"],
  desc: [
    "A chess game built by using vanilla Javascript",
    "Users can interact with chess pieces",
  ],
};

export const project4: projectObject = {
  title: "Spotify Clone",
  sourceSrc: "https://github.com/evanch98/spotify-clone-nextjs",
  liveSrc: "",
  date: "5/31/2023",
  category: "Hobby project",
  tech: [
    "Next JS",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Stripe",
  ],
  desc: ["Core Spotify features"],
};
