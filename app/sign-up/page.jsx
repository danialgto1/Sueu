/** @format */

import * as React from "react";

const TextInput = ({ id, labelText, type = "text", placeholder }) => {
  return (
    <div className="flex grow justify-center items-start py-3 pr-16pl-3 rounded-xl border border-solid border-[color:var(--border-normal-day,#DBDBDB)]">
      <label htmlFor={id} className="sr-only">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={labelText}
        className="w-full bg-white/0 px-2"
      />
    </div>
  );
};

const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-16 py-4 whitespace-nowrap rounded-xl leading-[150%] ${className}`}>
    {children}
  </button>
);

const AccountCreationForm = () => (
  <form className="flex flex-col gap-2 mt-1.5 max-w-full w-[400px]">
    <div className="flex gap-6">
      <TextInput
        id="firstName"
        labelText="First Name"
        placeholder="First Name"
      />
      <TextInput id="lastName" labelText="Last Name" placeholder="Last Name" />
    </div>
    <TextInput
      id="email"
      type="email"
      labelText="Email Address"
      placeholder="Enter your email"
    />
    <TextInput
      id="phoneNumber"
      labelText="Phone Number"
      placeholder="Phone Number"
    />
    <TextInput
      id="password"
      type="password"
      labelText="Password"
      placeholder="Create password"
    />
    <TextInput
      id="confirmPassword"
      type="password"
      labelText="Confirm Password"
      placeholder="Confirm password"
    />
    <Button type="submit" className="bg-neutral-900 text-white">
      Continue
    </Button>
  </form>
);

const SignUpPage = () => {
  return (
    <section className="justify-between w-full max-md:max-w-full">
      <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center self-stretch px-16 py-12 text-base max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center justify-center">
              <img
                loading="lazy"
                src="/svgs/Logo.svg"
                alt="Law firm logo"
                className=" max-w-full aspect-[1.85] w-[100px]"
              />
              <div className="self-center mt-2.5 text-xs font-extrabold leading-4 whitespace-nowrap text-neutral-950 tracking-[3.48px]">
                LAW FIRM
              </div>
              <div className="self-center mt-8 text-3xl font-semibold leading-10 whitespace-nowrap text-neutral-950">
                Create account
              </div>
              <div className="flex  w-full items-center rounded-xl overflow-clip  justify-between">
                <div className=" w-1/2 py-4  text-center">Regular user</div>
                <div className="w-1/2 text-center py-4 bg-black text-white">
                  Lawyer
                </div>
              </div>
              <div className="my-2 border-b border-1 border-slate-200 w-full" />
              <br className="" />
              <AccountCreationForm />
            </div>
          </div>
        </div>
        <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-base leading-6 whitespace-nowrap text-neutral-300 max-md:max-w-full">
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[900px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="/images/bg-sign.jpg"
                alt="Abstract background"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col gap-4 justify-center px-9 py-8 mt-64 mb-48 max-w-full backdrop-blur-[10px] bg-black bg-opacity-50 rounded-[33px] w-[470px] max-md:px-5 max-md:my-10">
                <div className="self-center text-2xl leading-6 text-zinc-300">
                  Profession details
                </div>
                <div className=" w-full flex flex-col h-px  border-b-1 border-slate-200 bg-zinc-300"></div>
                <TextInput
                  id="personalID"
                  labelText="Personal ID"
                  placeholder="Personal ID"
                />
                <TextInput
                  id="firmsID"
                  labelText="Firm's ID"
                  placeholder="Firm's ID"
                />
                <TextInput
                  id="firmsNumber"
                  labelText="Firm's Number"
                  placeholder="Firm's Number"
                />
                <Button className="mt-3.5 text-black bg-white">
                  Upload your certificate
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </header>
    </section>
  );
};

export default SignUpPage;
