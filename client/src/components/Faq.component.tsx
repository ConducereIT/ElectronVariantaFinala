export default function Faq() {
  return (
    <>
      <div className="mt-24 ">
        <h1 className="text-frumos font-bold text-white text-[2rem] lg:text-[3rem]">
          FAQ
        </h1>
        <ul className="mx-auto divide-y  rounded-xl">
          <li className="my-4">
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-[#ffc947] transition group-open:rotate-90 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" lg:text-xl text-sm text-white text-left text-frumos select-none">
                  Când are loc și cât timp durează Electron?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Electron durează 24 ore, în perioada 9-10 martie 2024.
                </p>
              </article>
            </details>
          </li>
          <li className="my-4">
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-[#ffc947] transition group-open:rotate-90 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" lg:text-xl text-sm text-white text-left text-frumos select-none">
                  Nu am mai participat niciodată la un hackaton. Ce fac?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Fiecare participare este o oportunitate nouă. Începe prin a te
                  înscrie. Expolrează idei, colaborează și bucură-te de
                  experiență
                </p>
              </article>
            </details>
          </li>
          <li className="my-4">
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-[#ffc947] transition group-open:rotate-90 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" lg:text-xl text-sm text-white text-left text-frumos select-none">
                  Cum mă înscriu?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Startul înscrierilor va avea loc în apropierea evenimetului.
                  Follow us on social media.
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}
