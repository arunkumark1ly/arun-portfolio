import {
  Code2,
  Layers,
  Cloud,
  Smartphone,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import type { FreelanceFeatureIcon, FreelanceTechIcon } from "@/types/freelance";

const featureIcons: Record<FreelanceFeatureIcon, LucideIcon> = {
  smartphone: Smartphone,
  layers: Layers,
  monitor: Monitor,
  code2: Code2,
  cloud: Cloud,
};

const techIcons: Record<FreelanceTechIcon, LucideIcon> = {
  code2: Code2,
  layers: Layers,
  cloud: Cloud,
};

export function getFeatureIcon(name: FreelanceFeatureIcon): LucideIcon {
  return featureIcons[name];
}

export function getTechIcon(name: FreelanceTechIcon): LucideIcon {
  return techIcons[name];
}
