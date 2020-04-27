import React from "react";
import { TreeNode } from "./TreeNode";

export class TreeView extends React.Component {
    state = { treeData: [], seleted: "" };

    componentDidMount() {
        this.setState({ treeData: this.props.treeData });
    }
    componentDidUpdate(prevProps) {
        if (this.props.treeData !== prevProps.treeData) {
            this.setState({ treeData: this.props.treeData });
        }
    }
    handleSelect = data => {
        this.setState({ seleted: data.text });
        this.props.getSelectedNode && this.props.getSelectedNode(data);
    };

    render() {
        var treeData = this.state.treeData;
        var nodes = treeData.map(i => (
            <TreeNode
                node={i}
                children={i.children}
                handleSelect={this.handleSelect}
                seleted={this.state.seleted}
            />
        ));
        return (
            <div className="treeview">
                <ul className="tree-ui">{nodes}</ul>
            </div>
        );
    }
}
