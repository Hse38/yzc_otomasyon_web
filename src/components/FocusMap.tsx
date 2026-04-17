import dynamic from "next/dynamic";

type FocusMapProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

export const FocusMap = dynamic<FocusMapProps>(
  () => import("@/components/FocusMapClient").then((mod) => mod.FocusMapClient),
  { ssr: false }
);
