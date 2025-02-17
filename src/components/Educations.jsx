import { educationHistory } from '../constants';
const Educations = ({ className }) => {
  return (
    <section id="EDUCATION" className={` ${className}`}>
      <h2 className="mb-4 text-3xl font-oswald font-bold text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 bg-clip-text text-transparent tracking-wide">
        Education
      </h2>
      <ul className="flex flex-col md:flex-row gap-4 font-nunita">
        {educationHistory.map((record) => (
          <div className="w-full border-2 border-slate-500  p-4 rounded-md">
            <div className="flex justify-between space-y-4">
              <h3 className="text-xl text-slate-200 font-semibold">
                {record.schoolName}
              </h3>
              <span className="text-sm text-slate-400">
                {record.durationYear}
              </span>
            </div>
            <p className="text-slate-300">{record.department}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Educations;
