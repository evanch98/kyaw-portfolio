import type { projectObject } from "~/types/types";

/* Projects's data */

// if the project is deployed on Vercel, don't include the optional property deployedOn since it is the default value

export const portfolioWebsite: projectObject = {
  title: "Portfolio Website",
  sourceSrc: "https://github.com/evanch98/kyaw-portfolio",
  liveSrc: "/",
  date: "6/12/2023",
  category: "Hobby project",
  tech: ["Qwik", "Qwik City", "TypeScript", "Tailwind CSS", "Motion One"],
  desc: ["Simple portfolio website"],
};

export const project6: projectObject = {
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

export const project5: projectObject = {
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

export const project4: projectObject = {
  title: "Chess",
  sourceSrc: "https://github.com/evanch98/chess-javascript",
  liveSrc: "https://evanch98.github.io/chess-javascript/",
  date: "6/16/2023",
  category: "Hobby project",
  tech: ["JavaScript", "HTML", "CSS"],
  desc: [
    "A chess game built by using vanilla Javascript",
    "Users can interact with chess pieces",
  ],
  deployedOn: "GitHub",
};

export const project3: projectObject = {
  title: "Spotify Clone",
  sourceSrc: "https://github.com/evanch98/spotify-clone-nextjs",
  liveSrc: "https://spotify-clone-nextjs-xi.vercel.app/",
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
  desc: [
    "Supabase and Stripe integrations",
    "Users' data are stored on the Supabase",
    "Users' data are stored on the Supabase",
    "Users can upload songs",
    "Users can like songs and see the list of the liked songs",
    "Users can search songs from the sever, and the songs will be displayed in realtime",
    "Users can play and listen to the songs uploaded by them or other users (can actually play the uploaded songs)",
    "Users can adjust the volume of the sound and mute the sound",
    "Users can buy the premium subscription which is made possible by the Stripe",
    "Users can cancel the premium subscription",
    "Restrict the user from performing some actions if there is no premium subscription",
  ],
};
