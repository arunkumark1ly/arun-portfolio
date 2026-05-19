import {
  Code2,
  Layers,
  Cloud,
  Smartphone,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import type { ConsultingFeatureIcon, ConsultingTechIcon } from "@/types/consulting";

const featureIcons: Record<ConsultingFeatureIcon, LucideIcon> = {
  smartphone: Smartphone,
  layers: Layers,
  monitor: Monitor,
  code2: Code2,
  cloud: Cloud,
};

const techIcons: Record<ConsultingTechIcon, LucideIcon> = {
  code2: Code2,
  layers: Layers,
  cloud: Cloud,
};

export function getFeatureIcon(name: ConsultingFeatureIcon): LucideIcon {
  return featureIcons[name];
}

export function getTechIcon(name: ConsultingTechIcon): LucideIcon {
  return techIcons[name];
}
