const Contact = ({ className }) => {
  return (
    <section id="CONTACT" className={`rounded-md ${className}`}>
      <h2 className="mb-4 text-3xl font-oswald font-bold text-center text-blue-400 tracking-wide">
        Contact Me
      </h2>
      <form className="w-full border border-slate-500 rounded-md bg-zinc-800 p-6">
        <div className="space-y-2">
          <label className="text-slate-300" htmlFor="email">
            Email
          </label>
          <input
            className="focus:outline-none rounded-md text-slate-300 bg-zinc-900 w-full px-4 py-2"
            id="email"
            type="email"
          />
        </div>
        <div className="space-y-2">
          <label className="text-slate-300" htmlFor="email">
            Message
          </label>
          <textarea
            className="focus:outline-none rounded-md text-slate-300 bg-zinc-900 w-full px-4 py-2"
            id="email"
            type="email"
          />
        </div>
        <button className="px-4 py-2 w-full bg-slate-300 hover:bg-slate-100 text-slate-800 rounded-md mt-4">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
