import React from "react";
import { AuthRepository } from "../../../../repositories";
import { AuthService } from "../../../../services";

const Signin = () => {
  const signWithGoogle = React.useCallback(() => {
    const authService = new AuthService(new AuthRepository());

    authService.signInWithGoogle().then((user) => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      <h1>Signin Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        provident dolores quos et laboriosam eveniet, commodi natus ipsam
        inventore, ratione amet, laborum non. Voluptates veritatis obcaecati
        eligendi natus perferendis laudantium.
      </p>
      <button onClick={signWithGoogle}>Sign with google</button>
    </div>
  );
};

export default Signin;
