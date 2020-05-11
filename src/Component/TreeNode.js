import React from "react";
import { FaAngleDown, FaAngleRight, FaFolder } from "react-icons/fa";

export const TreeNode = (props) => {
   let { children = [], handleSelect, node, seleted } = props;
   var span;
   var nodes;
   if (children.length > 0) {
      span = <span onClick={() => props.handleExpand(node.id)}>{node.expand ? <FaAngleDown /> : <FaAngleRight />}</span>;
      if (node.expand) {
         nodes = children.map((i, j) => <TreeNode node={i} key={j} handleExpand={props.handleExpand} children={i.children} handleSelect={handleSelect} seleted={seleted} />);
      }
   }

   return (
      <li style={style.li}>
         <FolderSpan name={node.name} handleSelect={handleSelect} node={node} seleted={seleted}>
            <span>{span}</span>
         </FolderSpan>
         <ul style={style.ul}>{nodes}</ul>
      </li>
   );
};

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
      listStyleType: " none",
      paddingLeft: " 20px",
      marginTop: "10px",
      fontSize: "12px",
   },
   li: {
      position: "relative",
      paddingLeft: " 20px",
      marginBottom: " 10px",
   },
   liicon: { color: "#007bff", fontSize: "18px" },
   arrowIcon: { fontSize: "18px" },
   liText: { paddingLeft: "10px", color: "black", fontSize: " 16px" },
};
