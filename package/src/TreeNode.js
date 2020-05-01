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
                <span onClick={this.toggle}>
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
            <li style={style.li}>
                <FolderSpan
                    name={this.props.node.name}
                    handleSelect={handleSelect}
                    node={node}
                    seleted={seleted}
                >
                    <span>{span}</span>
                </FolderSpan>
                <ul style={style.ul}>{nodes}</ul>
            </li>
        );
    }
}

const FolderSpan = ({ name = "", node = {}, ...props }) => {
    return (
        <div>
            <span style={style.arrowIcon}>{props.children}</span>
            <span style={style.liicon} onClick={() => props.handleSelect(node)}>
                {node.icon ? node.icon : <FaFolder />}
            </span>
            <label style={style.liText} onClick={() => props.handleSelect(node)}>
                {name}
            </label>
        </div>
    );
};

const style = {
    ul: {
        "list-style-type": " none",
        "padding-left": " 20px",
        "margin-top": "10px",
        "font-size": "12px"
    },
    li: {
        position: "relative",
        "padding-left": " 20px",
        "margin-bottom": " 10px"
    },
    liicon: { color: "#007bff", "font-size": "18px" },
    arrowIcon: { "font-size": "18px" },
    liText: { "padding-left": "10px", color: "black", "font-size": " 16px" }
};
