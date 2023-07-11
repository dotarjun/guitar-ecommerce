"use client"

import { useState, useEffect } from "react"

import StoreModal from "@/components/modals/storeModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null
    }

    return (
        <>
            <StoreModal />
        </>
    )
};

export default ModalProvider;