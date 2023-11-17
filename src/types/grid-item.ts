export interface GridItem {
    title: string;
    subtitle?: string;
    image_src?: string;
}

export interface FlippableGridItem {
    front: GridItem;
    back: GridItem;
}

export const getImgAssetPath = (fileName: string): string => {
    const assetURL = "/imgs/";
    return process.env.PUBLIC_URL + assetURL + fileName + "";
  };