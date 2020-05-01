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
                <ul style={style.ul}>{nodes}</ul>
            </div>
        );
    }
}
const style = {
    ul: {
        "list-style-type": " none",
        "padding-left": " 20px",
        "margin-top": "10px",
        "font-size": "12px"
    }
};
