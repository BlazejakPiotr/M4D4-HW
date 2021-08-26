import Badge from "react-bootstrap/Badge";

const MyBadge = ({ text, color }) => {
  return (
    <h4>
      This is a <Badge variant={color}>{text}</Badge>
    </h4>
  );
};

export default MyBadge;
