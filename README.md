# react-icon-tree

React icon tree view displays hierarchical data in a traditional tree structure.

## Usability

react-tree-view requires react,react-dom as peer dependency. All versions should be supported, but make sure you are using matching versions of the two packages.

```javascript
import { TreeView } from "react-icon-tree";
```

and include css files with styles (you may include this in different way)

```javascript
require("../node_modules/react-icon-tree/dist/style.css");
```

## props/options

### data

Actual data you want to show, this is an array of object.

```javascript
const treeData = [
    {
        name: "root",
        children: [
            {
                name: "parent",
                children: [{ name: "child1" }, { name: "child2" }]
            },
            {
                name: "parent",
                children: [
                    {
                        name: "nested parent",
                        children: [{ name: "nested child 1" }, { name: "nested child 2" }]
                    }
                ]
            }
        ]
    }
];
getSelectedNode = data => {
    console.log(data);
};

<TreeView treeData={treeData} getSelectedNode={this.getSelectedNode} />;
```

### custom icons

To customize icon add icon key

```javascript
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
getSelectedNode = data => {
    console.log(data);
};

<TreeView treeData={treeData} getSelectedNode={this.getSelectedNode} />;
```
