# react-icon-tree

React icon tree view displays hierarchical data in a traditional tree structure.

## Usability

react-icon-tree requires react,react-dom as peer dependency. All versions should be supported, but make sure you are using matching versions of the two packages.

```javascript
import { TreeView } from "react-icon-tree";
```

### data

treeData :array "actual data you want to show, this is an array of object.",

getSelectedNode:fucntion

```javascript
const treeData = [
   {
      name: "root",
      children: [
         {
            name: "parent",
            children: [{ name: "child1" }, { name: "child2" }],
         },
         {
            name: "parent",
            children: [
               {
                  name: "nested parent",
                  children: [{ name: "nested child 1" }, { name: "nested child 2" }],
               },
            ],
         },
      ],
   },
];
getSelectedNode = (data) => {
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
               { name: "child2", icon: <FaFileAlt /> },
            ],
         },
         {
            name: "parent",
            children: [
               {
                  name: "nested parent",
                  children: [
                     { name: "nested child 1", icon: <FaFileAlt /> },
                     { name: "nested child 2", icon: <FaFileAlt /> },
                  ],
               },
            ],
         },
      ],
   },
];
getSelectedNode = (data) => {
   console.log(data);
};

<TreeView treeData={treeData} getSelectedNode={this.getSelectedNode} />;
```

### custom icons

To expand on load add expand key on data

```javascript
const treeData = [
    {
        name: "root",
        expand:true
        children: [
            {
                name: "parent",
                expand:true
                children: [
                    { name: "child1"},
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
