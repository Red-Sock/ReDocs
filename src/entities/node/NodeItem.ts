export interface NodeItem {
    name: string;
    link: string;
    inner: Array<NodeItem>;
    parent?: NodeItem
}
