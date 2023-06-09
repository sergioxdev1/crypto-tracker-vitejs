import { useState } from 'react';

const Pagination = () =>
{
   let [num, setNum] = useState(1)
   let [cur, setCur] = useState(1)

   const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
      { page: num + 3 },
   ]
   function Next ()
   {
      setNum(++num)
   }
   function back ()
   {
      num > 1 && setNum(--num)
   }
   return (
      <div className="flex bg-white m-6 rounded-lg font-light items-center justify-center">
         <button onClick={back} className="h-12 border-2 border-r-0 border-yellow-400
               px-4 rounded-l-lg hover:bg-yellow-400 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
         </button>
         {
            pages.map((pg, i) => (
               <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-yellow-400
               w-12 ${cur === pg.page && 'bg-yellow-400 text-white'}`}>{pg.page}</button>
            ))
         }
         <button onClick={Next} className="h-12 border-2  border-yellow-400
               px-4 rounded-r-lg hover:bg-yellow-400 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
         </button>
      </div>
   )
}

export default Pagination