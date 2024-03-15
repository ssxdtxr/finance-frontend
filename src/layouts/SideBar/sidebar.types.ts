import { SVGProps } from "react";

export interface SideBarData {
  title: string;
  route: "books" | "costs" | "todo";
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
