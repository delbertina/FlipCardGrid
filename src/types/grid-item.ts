export interface GridItem {
    title: string;
    subtitle?: string;
    image_src?: string;
}

export interface FlippableGridItem {
    front: GridItem;
    back: GridItem;
}

export interface FlippableGridData {
    id: number;
    title: string;
    gridItems: FlippableGridItem[][];
}

export const getImgAssetPath = (fileName: string): string => {
    const assetURL = "/imgs/";
    return process.env.PUBLIC_URL + assetURL + fileName + "";
  };