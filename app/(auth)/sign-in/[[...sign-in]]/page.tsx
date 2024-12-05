import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <main className="flex h-screen w-full items-center bg-gray-800 justify-center">
        <SignIn />
      </main>
    </>
  );
};

export default SignInPage;
