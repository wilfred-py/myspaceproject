"use client";

import { useEffect } from "react";

export default function Error({
    // 2 props: error & reset;
    //error is error object of whatever went wrong;
    // reset is a special function NextJS which will attempt to rerender the page component
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    // console.log error
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
