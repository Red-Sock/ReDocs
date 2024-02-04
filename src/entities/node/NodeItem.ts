export interface NodeItem {
    name: string;
    link: string;
    inner?: NodeItem[];
    parent?: NodeItem
}
