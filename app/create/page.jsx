/** @format */

import React from "react";

// Reusable components based on the repeated patterns
const FieldCard = ({ title, description }) => (
  <div className="grow justify-center px-2 py-1 hover:shadow-lg cursor-pointer rounded-lg bg-slate-50 text-zinc-900">
    {title}: <br />
    <span className="text-xs"> {description} </span>
  </div>
);

const SectionHeader = ({ src, alt, title }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="flex gap-5 w-fit items-center text-6xl font-extrabold tracking-tighter text-black max-md:flex-wrap  max-md:max-w-full max-md:text-4xl">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="max-w-full aspect-[1.85] w-[100px]"
      />
      <div className="">
        {" "}
        {title}{" "}
        <p className=" text-right text-xl font-light tracking-tight leading-4   whitespace-nowrap text-zinc-800">
          Choose one field to start
        </p>
      </div>
    </div>
  </div>
);

const PreviousClaim = ({ src, alt, title }) => (
  <div className="flex flex-wrap gap-3 cursor-pointer hover:font-semibold content-center mt-4 max-w-full rounded-lg w-[218px]">
    <img loading="lazy" src={src} alt={alt} className="w-6 aspect-square" />
    <div className="grow my-auto">{title}</div>
  </div>
);

function Create() {
  return (
    <div className="justify-center h-[790px] self-stretch">
      <div className="flex  max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col justify-between bg-white border-r border-solid border-r-[color:var(--black-10,rgba(28,28,28,0.10))]">
            <div className="flex flex-col items-center px-5 pt-5 pb-8">
              <button className="flex gap-2 button justify-between self-stretch px-12 py-2 text-lg leading-6 text-center text-white bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/025f7f39c979207ad7695817bb53f2fe708382cd17d25751495dbb273e0d1f38?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                  alt="New Request Icon"
                  className="my-auto w-5 aspect-square"
                />
                <div>New Request</div>
              </button>
              <PreviousClaim
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1233db8a2931ba7c740c78ece4ce439fcb4971508a7d8d152be9ebc1f926d33?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                alt="Previous claim 1"
                title="Previous claim 1"
              />
              <PreviousClaim
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1233db8a2931ba7c740c78ece4ce439fcb4971508a7d8d152be9ebc1f926d33?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                alt="Previous claim 2"
                title="Previous claim 2"
              />
              <PreviousClaim
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1233db8a2931ba7c740c78ece4ce439fcb4971508a7d8d152be9ebc1f926d33?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                alt="Previous claim 3"
                title="Previous claim 3"
              />
            </div>
            <div className="flex flex-col justify-center p-8 border-t border-solid border-t-[color:var(--black-10,rgba(28,28,28,0.10))] mt-[510px] max-md:px-5 max-md:mt-10">
              <div className="flex hover:font-semibold flex-wrap gap-3 justify-between content-center rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecf1e729f44e04d541dc2c6b7a8e166451f3592fbe4d8ada5160fcadc36512e5?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                  alt="My account"
                  className="w-6 aspect-square"
                />
                <div className="grow cursor-pointer y-auto">My account</div>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex flex-col  w-4/5 ">
          <section className="flex flex-col grow justify-center self-stretch  w-full bg-stone-100 max-md:max-w-full">
            <SectionHeader
              className="relative"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dd2974fc137744a4e9833a7e44b2a223877930615aa4ab05e1c47bd46c60fef?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
              alt="Welcome To SUE"
              title="Welcome To SUE"></SectionHeader>
            <div className="flex flex-col flex-wrap justify-center content-center self-center px-9 mt-3.5 w-full max-w-[1072px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between text-sm leading-5 text-zinc-900 max-md:flex-wrap">
                <FieldCard
                  title="Administrative Law"
                  description="Deals with the activities of government agencies."
                />
                <FieldCard
                  title="Admiralty (Maritime) Law"
                  description="Governs activities that occur on navigable waters."
                />
                <FieldCard
                  title="Business (Corporate) Law"
                  description="Governs the formation and operation of businesses."
                />
                <FieldCard
                  title="Bankruptcy Law"
                  description="Focuses on laws related to the financial affairs of individuals and businesses."
                />
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <FieldCard
                    title="Civil Rights Law"
                    description="Concerned with the protection of individuals' rights against infringement by governments or private organizations."
                  />
                  <FieldCard
                    title="Health Law"
                    description="Concerned with laws and regulations related to healthcare delivery, insurance, and patient rights."
                  />
                  <FieldCard
                    title="Military Law"
                    description="Governs the armed forces and military personnel."
                  />
                  <FieldCard
                    title="Intellectual Property Law"
                    description="Protects creations of the mind, such as inventions, literary and artistic works, and symbols, names, and images used in commerce."
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center mt-5 text-sm leading-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                <FieldCard
                  title="Contract Law"
                  description="Governs agreements between parties."
                />
                <FieldCard
                  title="Environmental Law"
                  description="Focuses on laws and regulations aimed at protecting the environment."
                />
                <FieldCard
                  title="Family Law"
                  description="Deals with legal matters pertaining to families and domestic relations."
                />
                <FieldCard
                  title="Labor (Employment) Law"
                  description="Regulates the relationship between employers, employees, and labor unions."
                />
              </div>
              <div className="flex gap-5 justify-between mt-5 text-sm leading-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                <FieldCard
                  title="Property Law"
                  description="Focuses on laws related to the ownership and use of real and personal property."
                />
                <FieldCard
                  title="Tax Law"
                  description="Concerned with laws and regulations related to taxation."
                />
                <FieldCard
                  title="Tort Law"
                  description="Addresses civil wrongs and liabilities."
                />
                <FieldCard
                  title="International Law"
                  description="Governs relationships between nations and international organizations."
                />
              </div>
            </div>
          </section>
          <footer className="flex justify-center items-center  py-5  text-xl font-semibold leading-5 backdrop-blur-[50px] text-zinc-900 text-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center px-5 py-1 max-w-full rounded-2xl bg-slate-50 w-[910px]">
              <div className="flex  gap-2 justify-between content-center rounded-lg max-md:max-w-full">
                <div className="flex  gap-5 justify-between content-center p-1 rounded-lg w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c0ecc6ac96062251afcf0581a35c190130a0f54d6c532abd947274b0ebe4d5?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                    alt="Message Icon"
                    className=" aspect-square"
                  />

                  <input
                    className="w-full appearance-none bg-white/0 "
                    type="text"
                    placeholder=" Type message or send your voice "
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab99b3af06755a98c415e94d9d5b2b77f5c7c6902251ef525149fade167f7c67?apiKey=4c83e4ad1d1e4023af598a5a237e938f&"
                  alt="Send Icon"
                  className="my-auto w-5 aspect-square"
                />
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Create;
