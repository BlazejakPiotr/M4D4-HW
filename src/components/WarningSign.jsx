import Alert from "react-bootstrap/Alert";

const WarningSign = ({ message }) => {
  // props is an object
  // {
  //   title: 'Strivestaurant'
  //   color: 'dark
  // }
  return (
    <Alert variant="danger">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default WarningSign;
