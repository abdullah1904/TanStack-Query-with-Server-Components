"use client"

import React from 'react'
import { QueryClientProvider } from "@tanstack/react-query"
import { getQueryClient } from "./get-query-client";

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers