import ogLogo from "/og-logo.jpeg";

function Logo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img height="300px" width="400px" src={ogLogo} alt="OG Logo" />
      <h1 className="text-slate-800 font-bold tracking-wide text-2xl">
        Cheat Sheet
      </h1>
    </div>
  );
}

export default Logo;
