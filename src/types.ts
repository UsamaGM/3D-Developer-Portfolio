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
  card: ExpCardData;
  children: ReactNode;
  index: number;
}
