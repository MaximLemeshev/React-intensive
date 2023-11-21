import { useState } from "react";

const ErrorElement = () => {
  const [error, setError] = useState(false);

  return <>{error && <div style={{ color: "red" }}>Some Error</div>}</>;
};

export default ErrorElement;
