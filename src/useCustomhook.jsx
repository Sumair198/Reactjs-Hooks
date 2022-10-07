import { useEffect } from "react";

const useCustomhook = (sumair) =>
{
    return(
        useEffect(() => {
            document.title =`Chats(${sumair})`
          })
    )
}
export default useCustomhook;