import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Opps!!!!</h1>
      <h2>Something Went to Wrong</h2>
      <h2>{error.status}</h2>
    </div>
  );
};

export default Error;
