import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <main className="flex h-screen w-full items-center bg-gray-800 justify-center">
        <SignUp />
      </main>
    </>
  );
};

export default SignUpPage;
