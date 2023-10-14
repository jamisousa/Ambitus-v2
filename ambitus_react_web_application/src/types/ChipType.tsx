import { MouseEvent } from "react";

export type ChipProps = {
  title: string;
  clickAction: (e: MouseEvent<HTMLButtonElement>) => void;
  showCancelIcon: boolean;
  showBackground: boolean;
  isSelected: boolean;
};
