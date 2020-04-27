import React from "react";
import { TreeView } from "./Component/TreeView";
import { FaAngleDown, FaAngleRight, FaFolder, FaFileAlt } from "react-icons/fa";

export class Demo extends React.Component {
    handleSelect = data => {
        console.log(data);
    };
    render() {
        return <TreeView treeData={treeData} getSelectedNode={this.handleSelect} />;
    }
}

const treeData = [
    {
        name: "root",
        icon: <FaFolder />,
        children: [
            {
                name: "parent",
                children: [
                    { name: "child1", icon: <FaFileAlt /> },
                    { name: "child2", icon: <FaFileAlt /> }
                ]
            },
            {
                name: "parent",
                children: [
                    {
                        name: "nested parent",
                        children: [
                            { name: "nested child 1", icon: <FaFileAlt /> },
                            { name: "nested child 2", icon: <FaFileAlt /> }
                        ]
                    }
                ]
            }
        ]
    }
];
