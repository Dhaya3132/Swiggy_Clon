import React from 'react';
import { useParams } from 'react-router';


export const SignIn = () => {
  const { userId } = useParams();

  return (
    <div>SignIn
      <p>{userId}</p>
    </div>
  )
}
