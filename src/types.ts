import { ReactNode } from "react";

export interface ButtonProps {
  className: string;
  text: string;
  id: string;
}

export interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

export interface ExpCardData {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface GlowCardProps {
  card: Partial<ExpCardData>;
  children: ReactNode;
  index: number;
}

export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [x: number, y: number, z: number];
}

export interface TechStackImg {
  name: string;
  imgPath: string;
}

export interface TechIconProps {
  model: TechStackIcon;
}

export interface Qualification {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}
