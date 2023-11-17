export interface GridItem {
    title: string;
    subtitle?: string;
    image_src?: string;
}

export interface FlippableGridItem {
    front: GridItem;
    back: GridItem;
}