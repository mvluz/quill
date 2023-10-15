"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={(visible) => {
            if (!visible) {
                setIsOpen(visible)
            }
        }}>
            <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent> teste
                {/* <UploadDropzone isSubscribed={isSubscribed} /> */}
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton