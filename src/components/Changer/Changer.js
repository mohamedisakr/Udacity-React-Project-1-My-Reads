import React from "react";
import "./Changer.css";

export function Changer() {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

// export default Changer;

/*
export class Changer extends React.Component {
  

  render() {
    
  }
}
*/

/**
 * options = [
    { key: "move", name: "Move to..." },
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
    { key: "none", name: "None" }
  ];
 * <select>
          {this.options.forEach(item => (
            <option value={item.key}>{item.name}</option>
          ))}
        </select>
 * 
 */
//  {
//   move: "Move to...",
//   currentlyReading: "Currently Reading",
//   wantToRead: "Want to Read",
//   read: "Read",
//   none: "None"
// };
// buildDropDownList([key, value]) {
//   return <option value={key}>{value}</option>;
// }
