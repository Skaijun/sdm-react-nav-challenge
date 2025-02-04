import { useState } from "react";
import { TreeNode } from "./Tree";


interface TreeEntryProps {
    entry: TreeNode;
    depth: number;
}

const TreeEntry: React.FC<TreeEntryProps> = ({ entry, depth }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sign = isOpen ? '-' : '+'
    const isFolder = 'children' in entry;

    const entryPadding = {
        paddingLeft: `${depth + 5}px`
    };

    const buttonContent = <button type="button" onClick={() => setIsOpen(!isOpen)}><span>{sign}</span>{entry.name}</button>;

    return (
        <div style={entryPadding}>
            {isFolder ? buttonContent : <p>{entry.name}</p>}
            {isOpen && entry.children && entry.children.length > 0 && entry.children.map((entry) => <TreeEntry key={Math.random() + entry.name} entry={entry} depth={depth + 1} />)}
        </div>
    )
};

export default TreeEntry;