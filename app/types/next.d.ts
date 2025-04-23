import "next";

declare module "next" {
  export interface PageProps {
    params: {
      [key: string]: string;
    };
  }
}
