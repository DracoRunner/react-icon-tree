import React from "react";
import { TreeNode } from "./TreeNode";

export class TreeView extends React.Component {
   state = { treeData: [], seleted: "" };

   componentDidMount() {
      let data = this.formatData(this.props.treeData, 1);
      this.setState({ treeData: data });
   }

   componentDidUpdate(prevProps) {
      if (this.props.treeData !== prevProps.treeData) {
         let data = this.formatData(this.props.treeData, 1);
         this.setState({ treeData: data });
      }
   }
   handleSelect = (data) => {
      this.setState({ seleted: data.text });
      this.props.getSelectedNode && this.props.getSelectedNode(data);
   };

   formatData = (treeData, id) => {
      treeData.forEach((element, i) => {
         element.id = id + "." + i;
         if (element.children && element.children.length > 0) {
            this.formatData(element.children || [], id + "." + i);
         }
      });
      return treeData;
   };

   onExpand = (treeData, id) => {
      treeData.forEach((element, i) => {
         if (element.id === id) {
            element.expand = !element.expand;
         }
         if (element.children && element.children.length > 0) {
            this.onExpand(element.children, id);
         }
      });
      return treeData;
   };

   handleExpand = (id) => {
      let data = this.onExpand(this.state.treeData, id);
      console.log(data);
      this.setState({ treeData: data });
   };

   render() {
      var treeData = this.state.treeData;
      var nodes = treeData.map((i, j) => <TreeNode key={j} handleExpand={this.handleExpand} node={i} children={i.children} handleSelect={this.handleSelect} seleted={this.state.seleted} />);
      return (
         <div className="treeview">
            <ul style={style.ul}>{nodes}</ul>
         </div>
      );
   }
}
const style = {
   ul: {
      listStyleType: " none",
      paddingLeft: " 20px",
      marginTop: "10px",
      fontSize: "12px",
   },
};
