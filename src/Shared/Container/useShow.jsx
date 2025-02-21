import { useState } from "react"


const useShow = (data, itemsperpage) => {
    
    const [value,setvalue] = useState(itemsperpage)
    const [status , setstatus] = useState(true)
   

    const paginatedData = data.slice(0,value)

    const loadMore = () => {
        setvalue(15);
        setstatus(!status);
        console.log("Loaded more")
    }

    const loadLess = () => {
        setvalue(itemsperpage);
        setstatus(!status);
        console.log("Loaded less")
    }

  return {
        paginatedData ,  loadMore ,loadLess , status
  };
}

export default useShow