import React from "react";
import { FaAngleDown, FaAngleRight, FaFolder } from "react-icons/fa";

export class TreeNode extends React.Component {
    state = { isVisible: false };
    toggle = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };

    render() {
        let { children = [], handleSelect, node, seleted } = this.props;
        var span;
        var nodes;
        if (children.length > 0) {
            span = (
                <span className="icon" onClick={this.toggle}>
                    {this.state.isVisible ? <FaAngleDown /> : <FaAngleRight />}
                </span>
            );
            if (this.state.isVisible) {
                nodes = this.props.children.map(i => (
                    <TreeNode
                        node={i}
                        children={i.children}
                        handleSelect={handleSelect}
                        seleted={seleted}
                    />
                ));
            }
        }

        return (
            <li>
                <FolderSpan
                    name={this.props.node.name}
                    handleSelect={handleSelect}
                    node={node}
                    seleted={seleted}
                >
                    <span className="arrowIcon">{span}</span>
                </FolderSpan>
                <ul>{nodes}</ul>
            </li>
        );
    }
}

const FolderSpan = ({ name = "", node = {}, ...props }) => {
    return (
        <div className={props.seleted === name ? "litext liselected" : "litext"}>
            <span className="text-primary">{props.children}</span>
            <span className="iconli" onClick={() => props.handleSelect(node)}>
                {node.icon ? node.icon : <FaFolder />}
            </span>
            <label className="ml-2 litext" onClick={() => props.handleSelect(node)}>
                {name}
            </label>
        </div>
    );
};
