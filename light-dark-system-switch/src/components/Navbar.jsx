import options from "../data/options"

export default function Navbar(props) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="w-12 text-lg font-bold ml-2 tracking-widest">PROTOCOL</h1>
      <div className="dark:bg-slate-800 bg-gray-100 mr-2 duration-100 mt-2 rounded">
        {options?.map((opt, i) => {
          return (
            <button
              key={i}
              onClick={() => props.handleSwitch(opt.text)}
              className={`w-8 h-8 leading-4 text-xl rounded-full m-1 ${props.theme === opt.text && "text-sky-600"}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          );
        })}
      </div>
    </div>
  );
}
