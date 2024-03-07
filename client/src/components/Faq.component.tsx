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
                  Care este locația de desfășurare a hackatonului?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Locul desfășurării hackathonului este în Corpul A al
                  Facultății de Electronică, Telecomunicații și Tehnologia
                  Informației.
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
                  Este necesar să rămân la locul evenimentului peste noapte?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Deși participarea non-stop nu este obligatorie, prezența pe
                  parcursul întregului eveniment este recomandată pentru a
                  profita la maximum de sfaturile mentorilor și dinamica
                  evenimentului. Nu se poate lucre la probe/task-uri din afara
                  locului de desfășurare a competiției.
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
                  Va fi asigurată masa pe parcursul celor 24 de ore?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Un stand cu băuturi răcoritoare și gustări va fi permanent
                  disponibil pentru participanți, asigurându-se astfel confortul
                  și energia necesară pe parcursul întregului hackathon, de 24
                  de ore. În plus, va fi oferită și o masă principală, cu
                  detalii specifice ce vor fi comunicate la începutul
                  evenimentului.
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
                  Mă pot înscrie la Electron dacă nu sunt student în cadrul
                  ETTI?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Evenimentul este deschis pentru oricine dorește să își testeze
                  și să își dezvolte abilitățile, fără restricții legate de
                  apartenența la o anumită instituție educațională.
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
                  Este permisă utilizarea resurselor de pe internet pentru
                  proiecte?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Se permite utilizarea liberă a resurselor disponibile pe
                  internet, încurajându-se descoperirea rezolvărilor creative si
                  lucrul în echipă.
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
                  Există limitări în ceea ce privește tipurile de întrebări pe
                  care le pot adresa?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Mentorii vor fi pregătiți să ofere sprijin și îndrumări, însă
                  este esențial ca întrebările să fie orientate către
                  clarificarea problemelor și nu spre obținerea soluțiilor la
                  proba respectivă.
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
                  Este necesar să dispun de cunoștințe specifice înainte de a
                  participa?
                </span>
              </summary>

              <article className="px-4 pb-4 text-[#ffc947]">
                <p className=" lg:text-xl text-sm text-frumos text-left px-5">
                  Deși nu este necesar să aveți cunoștințe avansate în domeniu
                  pentru a participa, orice nivel de pregătire prealabilă poate
                  contribui la o mai bună înțelegere și abordare a provocărilor
                  hackathonului.
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}
