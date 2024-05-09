import ogLogo from "/og-logo.jpeg";

function Logo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-[250px] h-[100px] md:w-[400px] md:h-[200px]"
        src={ogLogo}
        alt="OG Logo"
      />
      <h1 className="text-slate-800 font-bold tracking-wide text-xl md:text-2xl uppercase">
        Wine Cheat Sheet
      </h1>
    </div>
  );
}

export default Logo;
