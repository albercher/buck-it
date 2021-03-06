import MultiLevel from "./MultiLevel";
import SingleLevel from "./SingleLevel";

function SidebarItem({ item }) {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  function hasChildren(item) {
    const { items: children } = item;

    if (children === undefined) {
      return false;
    }

    if (children.constructor !== Array) {
      return false;
    }

    if (children.length === 0) {
      return false;
    }

    return true;
  }
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;

  return <Component item={item} />;
}

export default SidebarItem;
