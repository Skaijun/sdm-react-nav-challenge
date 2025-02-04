import React from 'react';
import '../App.css'
import TreeEntry from './TreeEntry';

export interface TreeNode {
    name: string;
    children?: TreeNode[];
}
const data: TreeNode[] = [
    {
        name: "node_modules",
        children: [
            {
                name: ".bin",
                children: [
                    { name: 'acorn.cmd' },
                    { name: 'json.cmd' },
                    { name: 'parser.cmd' },
                ]
            },
            {
                name: "@ampproject",
                children: [
                    {
                        name: 'remaooing',
                        children: [
                            {
                                name: 'dist',
                                children: [{
                                    name: "types",
                                    children: [
                                        { name: 'source-map.d.ts' },
                                        { name: 'types.d.ts' },
                                    ]
                                }]
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        name: "public",
        children: [
            {
                name: "vite.svg"
            }
        ]
    },
    {
        name: "src",
        children: [
            {
                name: 'assets',
                children: [{
                    name: 'react.svg'
                }]
            },
            {
                name: 'components',
                children: [{
                    name: 'Tree.tsx'
                },
                {
                    name: 'TreeEntry.tsx'
                }]
            },
            {
                name: 'App.tsx'
            },
            {
                name: 'ui-components',
                children: []
            }
        ]
    },
    {
        name: '.gitignore'
    },
    {
        name: 'README.md'
    },
    {
        name: 'vite.config.ts'
    },
];

const Tree: React.FC = () => {
    return (
        <div className='tree'>
            {data.map((entry) => <TreeEntry key={Math.random() + entry.name} entry={entry} depth={0} />)}
        </div>
    )

};

export default Tree;